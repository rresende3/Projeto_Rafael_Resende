class C {
    private C1: string;
    private C2: number;

    getC1() {
        return this.C1;
    }

    setC1(c1: string) {
        this.C1 = c1;
    }

    getC2() {
        return this.C2;
    }

    setC2(c2: number) {
        this.C2 = c2;
    }

    MC1() {
        console.log('MC1');
    }

    MC2() {
        console.log('MC2');
    }
}