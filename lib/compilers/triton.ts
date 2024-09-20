import type {ParseFiltersAndOutputOptions} from '../../types/features/filters.interfaces.js';
import {BaseCompiler} from '../base-compiler.js';
import {BaseParser} from './argument-parsers.js';

export class TritonCompiler extends BaseCompiler {
    static get key() {
        return 'triton';
    }

    override optionsForFilter(filters: ParseFiltersAndOutputOptions, outputFilename: string): string[] {
        return [
            '-o', outputFilename
        ];
    }

    override orderArguments(
        options: string[],
        inputFilename: string,
        libIncludes: string[],
        libOptions: string[],
        libPaths: string[],
        libLinks: string[],
        userOptions: string[],
        staticLibLinks: string[],
    ): string[] {
        options.push('-i', inputFilename);
        return options.concat(libIncludes, libOptions, libPaths, libLinks, userOptions, staticLibLinks);
    }

    override getArgumentParser() {
        return BaseParser;
    }
}
