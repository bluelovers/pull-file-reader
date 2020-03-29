/**
 * Created by user on 2020/3/29.
 */

export type IFileLike = Partial<File> & {
	filepath?: string,
	webkitRelativePath?: string,

	size: number,
}

export type IFile = IFileLike | File
