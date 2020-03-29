/**
 * Created by user on 2020/3/29.
 */

/**
 * https://github.com/dominictarr/is-pull-stream/blob/c3c2676522e38617ce4f3e12af3e7bd6221beff6/index.js#L10
 * return true if stream is a source.
 */
export function isSource(s)
{
	return typeof s === 'function' && s.length === 2
}
