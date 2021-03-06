import { RunResult } from "../engine/run_result";
import { Step } from "../engine/step";
import { Command } from "../engine/command";
import { NoErrorCode } from "./noErrorCode";
import { NoException } from "./noException";
import { DirectoryExist } from "./directoryExist";
import { FileExist } from "./fileExist";


export class Assertions {

    public noErrorCode(result: RunResult): Assertions {
        NoErrorCode.run(result);
        return this;
    }

    public noException(result: RunResult): Assertions {
        NoException.run(result);
        return this;
    }

    public directoryExits(directory: string): Assertions {
        DirectoryExist.run(directory);
        return this;
    }

    public fileExits(filepath: string): Assertions {
        FileExist.run(filepath);
        return this;
    }
}