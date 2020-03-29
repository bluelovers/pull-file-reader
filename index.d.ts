/**
 * Given an HTML5 File object (from e.g. HTML5 drag and drops), turn it into a pull stream source.
 */
declare function pullFileReader(file: File, opts?: {
    /**
     * default `0` - Where in the file to start reading
     *
     * @default 0
     */
    offset?: number;
    /**
     * default 1MB chunk has tolerable perf on large files
     *
     * @default 1024 * 1024
     */
    chunkSize?: number;
}): <END, R>(end: END, cb: (err: boolean | ProgressEvent<FileReader> | END, data?: ArrayBuffer) => R) => R;
export = pullFileReader;
