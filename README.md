
<h1 align="center">:computer::video_camera: Fast Sentilyzer :hourglass_flowing_sand::movie_camera:</h1>

<div align="center">

<img src="https://github.com/arghyadeep99/Fast-Sentilyze/blob/master/media/app-logo.png" width=350px/>

<br>

[![](https://img.shields.io/badge/Made_with-PyTorch-red?style=for-the-badge&logo=tinder)](https://pytorch.org "PyTorch")
[![](https://img.shields.io/badge/Made_with-Flask-red?style=for-the-badge&logo=flask)](https://palletsprojects.com/p/flask  "Flask")
[![](https://img.shields.io/badge/Made_with-Fast.AI-red?style=for-the-badge&logo=fastai)](https://www.fast.ai "Fast.ai")
[![](https://img.shields.io/badge/Deployed_on-Heroku-red?style=for-the-badge&logo=heroku)](https://www.heroku.com/ "Heroku")
<br>

</div>
                                                                                            
---

Often, when we want to scan through long videos like lectures for a particular stuff, we end up doing guesswork for the presence of that word at a particular second. While few YouTubers actually provide links to the sub-topics, developing your own plug-in/software to get the same feels so cool! :grin: You just need to mention the keyword you are looking for and Fast-Sentilyzer will return the **clickable timestamps at which those words occur.**

Another goal of the project is to help you to perform **sentiment analysis on videos (mainly review video types)** so that you can get instant review on the go, without needing to watch the entire video. 

### Features implemented:

* [x] To provide **clickable** timestamps for particular keywords in a video so that you don't waste time guessing where that section is.
* [x] To perform **sentiment analysis** on the go on the YouTube videos (mainly review type videos), to get a quick review if you are in a hurry.  
* [x] Speeding up the unimportant segments of a video automatically. (Disabled currently due to lack of speed processing)


**Dataset used for this project: [IMDB Dataset](https://www.kaggle.com/utathya/imdb-review-dataset).**

---

## Flow of project: 

1. The user enters a link of YouTube video and the **keyword** to search for in the search box.

2. The software analyzes the transcript of the user-mentioned video by making API calls for both user-mentioned and auto-generated captions.

3. The software returns with the **clickable transcripts** so that the user can access those segments directly.

4. If the user wishes to obtain a sentiment analysis of any review video, the user will simply press the "Analyze" button. 

5. We have used **ULMFit** architecture to analyze the transcripts; and IMDB dataset for its training. 

6. The website returns a visual representation of the amount of positivity and negativity of the product review video. (The software analyzes the YouTube video, not the comments of the video).


---

### **Demo:** 

### Web App:

<div align="center">
<img src="./media/placeholder.png" width=500px/>
  
<img src="./media/placeholder.png" width=500px/>

<img src="./media/placeholder.png" width=500px/>
</div>

---

### Future scope of this project:

* [ ] This hack was originally going to be a **Google Chrome extension** but due to poor documentation and lack of awareness of Chrome Extension Development, we ran into multiple issues. We achieved around 90% completion of the project, being hampered by the issues in connecting front end and back end. So, our first future goal is obviously going to be developing the Chrome Extension for this hack. 

* [ ] Deploying the software on the cloud, to utlilize the high-speed functionality and enable an ultra-fast and smooth experience for the user.

* [ ] Apply **meaningful** sentiment analysis on more kind of videos, and also give option to take comments into consideration for reviews. 


#### This project still has scope of development, so you can also contribute to this Project as follows:
* [Fork](https://github.com/ArnAV318/sentilizer) this Repository.
* Clone your Fork on a different branch:
	* `git clone -b <name-of-branch> https://github.com/ArnAV318/sentilizer.git`
* After adding any feature:
	* Goto your fork and create a pull request.
	* We will test your modifications and merge changes.


---
<h3 align="center"><b>Developed with :heart: by <a href="https://github.com/arghyadeep99">Arghyadeep Das</a> and <a href="https://github.com/ArNAV318"> Arnav Mankad</a>.</b></h1> 

