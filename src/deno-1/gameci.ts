import { parseArgv } from '../shared/parseArgv.ts';
import { exec } from 'https://deno.land/x/exec@0.0.5/mod.ts';

console.dir(parseArgv(Deno.args));

const result = await exec('docker run -it unityci/base:1 /bin/bash');

console.log(result);
