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
      user : 'root',
      host : '139.196.90.36',
      ref  : 'origin/master',
      repo: 'git@github.com:moonljr/pm2TestPro.git',
      path : '/root/moon/app/todo',
      'post-deploy' : 'git pull && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
