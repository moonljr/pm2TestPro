module.exports = {
  apps : [{
    // 项目名称
    name: 'todoList',
    // 项目入口文件
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      // 远程服务器用户名
      user : 'root',
      // 远程服务器IP地址
      host : '139.196.90.36',
      port: 22,
      // git 分支
      ref  : 'origin/master',
      // git 地址
      repo: 'https://github.com/moonljr/pm2TestPro.git',
      'pre-deploy': 'git fetch --all',
      // 远程服务器存放文件地址
      path : '/root/moon/app',
      // 发布执行的命令
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
