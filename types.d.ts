/**
 * Created by user on 2020/3/29.
 */
export declare type IFileLike = Partial<File> & {
    filepath?: string;
    webkitRelativePath?: string;
    size: number;
};
export declare type IFile = IFileLike | File;
