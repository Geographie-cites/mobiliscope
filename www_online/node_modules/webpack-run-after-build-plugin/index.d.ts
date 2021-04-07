import { Plugin, Compiler } from 'webpack';

declare module 'webpack-run-after-build-plugin' {
    type BuildCallbackType = () => void;

    export class RunAfterBuildPlugin implements Plugin {
        private buildCallback?: BuildCallbackType;
        private isFirstCompilation: boolean;

        constructor(buildCallback?: BuildCallbackType);

        public apply(compiler: Compiler): void;
    }
}