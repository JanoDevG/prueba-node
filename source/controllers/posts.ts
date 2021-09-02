/** source/controllers/posts.ts */
import {Request, Response} from 'express';


const alphabet: String[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

const numbers: Number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findById(id: Number) {

}

function findByPatent(pattent: String) {
    let idNumber: Number;
    let letterOne: String = pattent.charAt(0);
    let numberOne: Number = parseInt(pattent.charAt(4));
    let numberTwo: Number = parseInt(pattent.charAt(5));
    let numberThree: Number = parseInt(pattent.charAt(6));

    let id = numberOne + '' + numberTwo + '' + numberThree;


    switch (letterOne) {
        case 'A':
            idNumber = parseInt(id) + 1;
            break;
        case 'B':
            idNumber = parseInt(id) + 1001;
            break;
        case 'C':
            idNumber = parseInt(id) + 2001;
            break;
        case 'D':
            idNumber = parseInt(id) + 3001;
            break;
        case 'E':
            idNumber = parseInt(id) + 4001;
            break;
        case 'F':
            idNumber = parseInt(id) + 5001;
            break;
        case 'G':
            idNumber = parseInt(id) + 6001;
            break;
        case 'H':
            idNumber = parseInt(id) + 7001;
            break;
        case 'I':
            idNumber = parseInt(id) + 8001;
            break;
        case 'J':
            idNumber = parseInt(id) + 9001;
            break;
        case 'K':
            idNumber = parseInt(id) + 10001;
            break;
        case 'L':
            idNumber = parseInt(id) + 11001;
            break;
        case 'M':
            idNumber = parseInt(id) + 12001;
            break;
        case 'N':
            idNumber = parseInt(id) + 13001;
            break;
        case 'O':
            idNumber = parseInt(id) + 14001;
            break;
        case 'P':
            idNumber = parseInt(id) + 15001;
            break;
        case 'Q':
            idNumber = parseInt(id) + 16001;
            break;
        case 'R':
            idNumber = parseInt(id) + 17001;
            break;
        case 'S':
            idNumber = parseInt(id) + 18001;
            break;
        case 'T':
            idNumber = parseInt(id) + 19001;
            break;
        case 'U':
            idNumber = parseInt(id) + 20001;
            break;
        case 'V':
            idNumber = parseInt(id) + 21001;
            break;
        case 'W':
            idNumber = parseInt(id) + 22001;
            break;
        case 'X':
            idNumber = parseInt(id) + 23001;
            break;
        case 'Y':
            idNumber = parseInt(id) + 24001;
            break;
        case 'Z':
            idNumber = parseInt(id) + 25001;
            break;
        default:
            idNumber = 0;
    }
    return idNumber;
}

interface Patent {
    groupLetter: String;
    groupNumber: Number;
}

// obtener por patente
const getPatent = async (req: Request, res: Response) => {
    let id: string = req.params.id;
};

// obtener por id
const getId = async (req: Request, res: Response) => {

    let patent: string = req.params.patent;
    let id: Number = findByPatent(patent);
    return res.status(200).json({id});
};

export default {getPatent, getId};