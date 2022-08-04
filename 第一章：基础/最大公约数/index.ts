/**
 * 求取最大公约数
 * @param p 除数
 * @param q 被除数
 * @returns 最大公约数
 */

const gcd = function(p:number,q:number) :number {

    if(q == 0) return p;

    let r:number = p % q;

    return gcd(q,r);
}

gcd(25,5);

const arr:number[] = [1];