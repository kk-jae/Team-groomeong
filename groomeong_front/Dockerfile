


FROM node:14

# 2. 패키지 먼저 설치하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install 

# 3. 소스코드 복사하기
COPY . /myfolder/
RUN yarn build

# 4. 도커 안에서 프로그램 실행
CMD yarn start