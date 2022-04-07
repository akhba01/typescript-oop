class Burung {
    constructor(private nama : string) {
        this.nama = nama;
    }
    getNama(): string {
        return this.nama;
    }

    terbang(): void {
        console.log(`${this.nama} terbang`);
    }
    
    async makan(): Promise<void> {
        await new Promise(resolve => {
            setTimeout(() => {
                console.log(`${this.nama} makan`);
            }, 1000);
        });
    }
}

const burung1 = new Burung('Ayam');
burung1.terbang();
burung1.makan();
