module.exports = {
  apps: [{
    name: 'teapot-services',
    script: './src/index.js',
    max_memory_restart: '1000M',
    watch: ["src"],
    node_args: ["--inspect=0.0.0.0:9229"],
    watch_delay: 1000,
    ignore_watch : ["node_modules"]
  }],
};