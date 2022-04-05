import { parseArgv } from '../shared/parseArgv.ts';
import { exec, OutputMode } from 'https://deno.land/x/exec@0.0.5/mod.ts';

const cliOptions = parseArgv(Deno.args);

console.log('using options', cliOptions);

const result = await exec('docker run -it unityci/editor:2020.3.15f2-base-1 /bin/bash -c "echo test"', {
  output: OutputMode.Capture,
  // verbose: true,
  continueOnError: true,
});

console.log(result.output);
