'use strict';

function singleThread() {
  process.argv[2] = 'Aprendiendo Node.jS';
  
  console.log('----------------------------------------------------------------------------');
  console.log('EL PROCESO DE NODE:');
  console.log('Id del proceso...................' + process.pid);
  console.log('Título...........................' + process.title);
  console.log('Directorio de Node...............' + process.execPath);
  console.log('Directorio Actual................' + process.cwd());
  console.log('Versión de Node..................' + process.version);
  console.log('Versiones Dependencias...........' + process.versions);
  console.log('Plataforma (SO)..................' + process.platform);
  console.log('Arquitectura (SO)................' + process.arch);
  console.log('Tiempo activo de Node............' + process.uptime());
  console.log('Argumentos del proceso...........' + process.argv);

  for (var key in process.argv) {
    console.log("Argumento " + key + ': ' + process.argv[key]);
  }

  console.log('----------------------------------------------------------------------------');
}

singleThread();