class A {
    private A1: number;
    private A2: number;

    getA1() {
        return this.A1;
    }

    setA1(a1: number) {
        this.A1 = a1;
    }

    getA2() {
        return this.A2;
    }

    setA2(a2: number) {
        this.A2 = a2;
    }

    MA1() {
        console.log('MA1');
    }

    MA2() {
        console.log('MA2');
    }

    MA3() {
        console.log('Alteração de classe A partir do clone');
    }
}