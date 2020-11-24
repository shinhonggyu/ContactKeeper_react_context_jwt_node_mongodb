package.json 초기화 npm init -y

install Dependencies: npm i express(프레임워크, router), bcryptjs, jsonwebtoken, config, express-validator(에러체크), moogoose(db와연결, 모델스키마생성, DB메소드)

npm i -D nodemon concurrently

"scripts": {
    "start": "node server.js",(배포)
    "server": "nodemon server.js"
  }

400: bad request
401: 허가되지않음(익명의사용자)
403: 로그인은 하였으나 권한이없는 사용자
503: 서버에러 과부하,폭주

몽고DB SECURITY => Network Access => IP Access List Entry to access anywhere 해결

헤로쿠배포 : https://shrouded-mountain-24302.herokuapp.com/
