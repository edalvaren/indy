
export default function currency (value){
        let amt = Number(value);
        return amt && amt.toLocaleString(undefined, {maximumFractionDigits:2}) || '0'
}

