let isFirstCompilation = true;

class RunAfterBuildPlugin {
    constructor(buildCallback) {
        this.buildCallback = buildCallback;
        this.isFirstCompilation = true;
    }

    apply(compiler) {
        compiler.plugin('after-emit', (compilation, callback) => {
            if (this.isFirstCompilation) {
                this.isFirstCompilation = false;

                if (this.buildCallback) {
                    this.buildCallback();
                }
            }

            callback();
        });
    }
}

module.exports = RunAfterBuildPlugin;