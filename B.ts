class B {
    private B1: number;
    private B2: number;

    getB1() {
        return this.B1;
    }

    setB1(b1: number) {
        this.B1 = b1;
    }

    getB2() {
        return this.B2;
    }

    setB2(b2: number) {
        this.B2 = b2;
    }

    MB1() {
        console.log('MB1');
    }

    MB2() {
        console.log('MB2');
    }
}