from flask import Flask,render_template,request
from youtube_transcript_api import YouTubeTranscriptApi
from pprint import pprint
app = Flask(__name__)

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
    
    pprint(result)
    
    return render_template('disp.html',url=code)

if __name__ == '__main__':
   app.debug=True
   app.run()