# 🐶 그루멍
우리 동네 반려견 미용샵, 검색부터 예약까지 간편하게 한번에!

그루멍은 우리 동네 반려견 미용실을 한눈에 볼 수 없을까? 라는 물음에서 시작된 프로젝트입니다. 펫팸족의 증가로 우후죽순으로 늘어나는 반려견 미용실. 타 지도 서비스에서 제공하는 미용샵 정보는 부정확하며 짧고 성의 없는 리뷰만 가득합니다. 그루멍은 점주가 직접 등록하고 관리하기 때문에 운영시간, 특이사항 등 샵 정보를 정확하게 제공하며, 실제 이용한 고객의 리얼한 후기를 확인할 수 있습니다.

# ✅ 배포 주소

**그루멍** [https://groomeong.store/](https://groomeong.store/)
<br></br>


# ✅ 기술 스택

`TypeScript`, `Next.js`, `React`, `GraphQL`, `React-Hooks`, `Emotion`, `Recoil`
<br></br>

# ✅ FrontEnd 팀원



## 권현재

😺 [https://github.com/kk-jae](https://github.com/kk-jae) 

- 랜딩 페이지, 로그인 페이지, 권한분기, 예약 페이지 제작
- 전체 오류 확인

## 길재훈

😺 [www.github.com/jaehoon0822](http://www.github.com/jaehoon0822)

- 와이어프레임 및 프로토타입 제작, 디자인 시스템 구축
- 지도 페이지, 회원가입 페이지 제작

## 김하은

😺 [https://github.com/JJHaEun](https://github.com/JJHaEun)

- Shop 디테일, 리뷰 페이지, Button 컴포넌트 제작
- 배포 담당

## 허광기

😺 [https://github.com/MadHeo](https://github.com/MadHeo)

- Jira 및 Git 관리
- 마이페이지, 반응형 제작
<br></br>

# ✅ 기술 키워드



## 아토믹 패턴

- 부트캠프에서 교육 받을 때 두 가지의 react 디자인 패턴을 사용했습니다. container/presentational 패턴, react-hook로 컴포넌트화 시키기는 hooks 패턴. 저희가 이번에 선택한 패턴은 **아토믹 패턴**이었습니다. 피그마 컴포넌트 디자인 활용을 극대화하고 싶었기 때문입니다. 아래 피그마 디자인을 보면 아토믹 패턴과 바로 호환할 수 있도록 구현했습니다. 덕분에 피그마 프레임이 곧 리액트 컴포넌트 폴더로 만들어지는 형식을 취했고 디자인이 변경될 때 곧바로 리액트 컴포넌트에도 적용할 수 있었습니다.

![Screenshot 2023-04-11 at 10 21 28 PM](https://user-images.githubusercontent.com/86145287/231186806-85e0cf8b-9a07-4580-962e-2d724de89de7.png)
    

## 재사용

- 저희는 그동안 리액트를 배우며 들었던 의문이 하나 있었습니다. 과연 우리는 **재사용을 잘 하고 있는 걸까**? 리액트는 재사용이 장점인 라이브러리라고 했지만 그동안 그 진수를 느껴보지 못했었습니다. 그래서 이번 프로젝트를 통해 최대한 재사용할 수 있는 디자인과 기능을 구현해 보자고 다짐했습니다. 작은 기능이라도 두 번 이상 사용된다면 **hooks로 컴포넌트화** 했으며, **컬러, 폰트, 미디어쿼리 등 디자인 요소**도 모두 재사용 가능하도록 만들었습니다. 특히, **컬러와 폰트는 피그마의 디자인 시스템 토큰을 export 한 후에 객체**로 변환하여 사용했습니다.
- ![Frame 87](https://user-images.githubusercontent.com/86145287/231189605-fa3dd6ea-fb76-4cc1-aa09-17aa513508f7.png)

    - [디자인시스템 객체 보기](https://github.com/code-bootcamp/groomeong_client/tree/master/groomeong_front/theme)

## 기술복합체 지도

## 애자일

- 이번 협업에는 Jira를 도입하여 태스크를 관리했습니다. 협업 경험이 없었기 때문에 많은 협업 툴을 찾아보고 공부했습니다. 지라, 노션, 아사나, 트렐로 중 지라를 선택한 이유는 스프린트 관리가 용이하고 깃허브와 연동되기 때문이었습니다. 짧은 기간의 프로젝트기 때문에 스프린트와 태스크 관리가 중요했습니다. 크게 디자인, 개발, 배포 및 디버깅 **3개의 에픽 이슈**로 나눈 후 **태스크 단위의 스토리 이슈**로 업무를 분배했습니다. 업무 분배 방식은 오전 회의를 통해 각자 구현해야 할 태스크를 나누고 업무 예상시간을 스토리 포인트로 정하여 어느 한쪽에 업무가 몰리지 않도록 공평하게 나누었습니다.
<br></br>

# ✅ 그루멍 페이지


## 랜딩 페이지

![웹_1_랜딩_gif](https://user-images.githubusercontent.com/86145287/231187636-af474b93-0a2c-43a9-849b-bb42ccdc7d54.gif)


## 회원가입 및 로그인
![웹_2_회원가입_로그인_gif](https://user-images.githubusercontent.com/86145287/231187668-7633b88c-e801-4023-b803-929b02bd3ac5.gif)


## 마이페이지

![웹_3_마이페이지수정_gif](https://user-images.githubusercontent.com/86145287/231187768-cc9f84c1-c2ee-4fa3-896e-7618ab001486.gif)


## 강아지 등록하기 페이지
![웹_4_강아지등록_gif](https://user-images.githubusercontent.com/86145287/231187815-c957e260-7a32-4e60-b5d6-cf9d31d6313d.gif)



## 지도


## 예약 페이지
![web_6_예약리스트_2_AdobeExpress](https://user-images.githubusercontent.com/86145287/231503325-87399981-0ada-4a76-bee1-b174f6ad6fcc.gif)




## 리뷰 페이지
![웹_7_예약리스트_리뷰작성_gif](https://user-images.githubusercontent.com/86145287/231187915-38b2a14a-a513-49bd-aa12-01551925b364.gif)


