from flask import Flask,render_template,request,jsonify
from youtube_transcript_api import YouTubeTranscriptApi
from fastai import *
from fastai.text import *
from pprint import pprint
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
reloaded=load_learner("","trained-model.pkl")
@app.route('/')
def hello_world():
   return render_template('temp.html')

@app.route('/disp', methods= ['GET','POST'])
def dispy():
    print("Hi")
    result = request.form
    search_key= result['search']
    result = result['url']

    print(result)
    print(search_key)
    result=result.split('?')[1]
    result=list(result.split("&"))
    for a in result:
        x,y=a.split('=')
        if x=='v':
            code=y
    result = YouTubeTranscriptApi.get_transcript(code)
    
    times=[]

    for a in result:
        text=a['text']
        if text.find(search_key)!=-1:
            times.append([a['start'],a['text']])
    
    print(times)
    
    return render_template('disp.html',url=code,listy=times,len=len(times))

@app.route('/analyze', methods= ['GET','POST'])
def analyze():
    if request.method == "POST":
        result = request.form
        result = result['url']

        result=result.split('?')[1]
        result=list(result.split("&"))
        for a in result:
            x,y=a.split('=')
            if x=='v':
                code=y
        result = YouTubeTranscriptApi.get_transcript(code)
        texty = ""

        for a in result:
            some = a['text']
            texty += some
            texty += " "
        texty = texty.replace("\n"," ")

        x= reloaded.predict(texty)
        print(x[2][1].item())

        return render_template('analyze.html',positive=x[2][1].item(),negative=x[2][0].item())
    return

@app.route('/api', methods=['GET','POST'])
def api():
    if request.method == "POST":
        result = request.form
        search_key= result['search']
        result = result['url']

        print(result)
        print(search_key)
        result=result.split('?')[1]
        result=list(result.split("&"))
        for a in result:
            x,y=a.split('=')
            if x=='v':
                code=y
        result = YouTubeTranscriptApi.get_transcript(code)
        
        times=[]

        for a in result:
            text=a['text']
            if text.find(search_key)!=-1:
                times.append([a['start'], a['text']])
        print(times)
        return jsonify(times)
    return '2'
        

if __name__ == '__main__':
    app.debug=True
    app.run()