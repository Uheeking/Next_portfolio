해당 프로젝트는 개발하는 정대리님의 유튜브를 보고 한 프로젝트입니다. ChatGPT와 slack bot등은 제가 추가한 사항입니다. 

## 🤩 프로젝트 개발 목표

- ***홈***
    - 프로젝트에 대한 소개와 lottie파일을 사용하였다.
- ***notion api***
    - notion api를 활용하여, 데이터베이스를 사용할 수 있다.
- ***사용자와의 contact***
    - 프로젝트를 만든 사용자와 contact할 수 있다.

## 🤔**사용 기술**

- **언어** : Next.js
- **Package**: next-themes(다크모드), react-lottie-player(lottie파일 사용)
- **IDEs** : Vscode

## ❤️‍🔥 프로젝트 내용 설명

해당 프로젝트는 3가지 페이지로 설명이 가능하다. 

### 1. 홈

홈페이지는 프로젝트 페이지에 무엇이 나와있는지 설명해주는 페이지이다. 그리고 lottie 파일을 사용하여 구현하였다. header와 footer를 전역적으로 사용해주었다. 

다크모드를 사용하여 전역적으로 어둡게 사용 가능하다. 해당 기능을 사용하게 되면, 글씨의 색깔을 모드에 따라 변하게 하였다.

<p align="center"><img src="https://github.com/Uheeking/Next_portfolio/assets/90121929/1e935961-b8b5-4f0f-92a9-a9145a79efac" height="500px"></p>


### 2. 프로젝트

프로젝트 사이트는 노션의 api를 활용하여 구현하였다. 데이터베이스를 만들어 제목, 기간, 언어, 팀, 설명등을 가져와 grid형식으로 구현하였다. 

한눈에 프로젝트는 어떠한 형식으로 구성했는지 알 수 있게 하였다. 또한, 이미지를 통해 어떤 프로젝트인지 시각적으로 알아보기 쉽게 하였다.
<p align="center"><img src="https://user-images.githubusercontent.com/90121929/230699848-09fc2b86-0048-4ba0-8148-2de7ce02ce25.png" height="500px"></p>

### 3. ChatGPT
<p align="center"><img src="https://user-images.githubusercontent.com/90121929/231706370-426e9ed3-e1d9-4f7a-8994-025be8a86342.png" height="500px"></p>
chatgpt와 대화한 내용을 불러올 수 있는 기능을 구현하여, 노션 database에 넣어 저장하였다. 그리고 이것을 페이지에 불러올 수 있게 하였다. 또한, chatgpt 페이지로 이동하여 내가 무슨 대화를 나누었는지도 확인이 가능하다. 이러한 기능을 페이지에 구현하였다. 

### 4. contact

프로젝트 제작자인 나와 연락할 수 있게 만든 페이지이다. 이 경우에 내가 연락할 수 있는 경로가 없어서 내 노션과 연결하였다. 그런데 노션과 연결하는 시간이 오래 걸려 이 부분은 조금더 수정해야할 듯하다.

## 추가)

contact부분이 로딩이 너무 오래걸려서 어떻게 할까 고민하다가 슬랙 봇으로 교체하였다.
<p align="center"><img src="https://github.com/Uheeking/Next_portfolio/assets/90121929/5a4f4ea7-85ad-4af8-ad21-58e86e86adc5" height="500px"></p>
위의 폼에 이름, 연락처, 전할 내용을 작성하고, 제출 버튼을 클릭하면 내 슬랙에 연락이 갈 수 있게 조치하였다.
<p align="center"><img src="https://github.com/Uheeking/Next_portfolio/assets/90121929/dd351088-b3df-493d-940d-6c6871f7c80b" height="200px"></p>
위는 내 슬렉에 온 연락이다. 

## 홈페이지 가기

<aside>
💡 [https://next-portfolio-one-rho.vercel.app/](https://next-portfolio-one-rho.vercel.app/contact)

</aside>
