package.json 초기화 npm init -y

install Dependencies: npm i express(프레임워크, router), bcryptjs, jsonwebtoken, config, express-validator(에러체크), moogoose(db와연결, 스키마생성)

npm i -D nodemon concurrently

"scripts": {
    "start": "node server.js",(배포)
    "server": "nodemon server.js"
  }

400: bad request
