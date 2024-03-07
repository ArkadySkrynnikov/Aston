class PaginationUtil {
    public pageBlocks: () => any[];
    public amountElementsInPage: number;
    public items: any[];

    constructor(items: any[], amountElementsInPage: number) {
        this.items = items;
        this.amountElementsInPage = amountElementsInPage;
        this.pageBlocks = function () {
            let counter = 0;
            let res = [];
            let temp = [];
            for (let i = 0; i < this.items.length; i++) {
                temp.push(this.items[i]);
                counter++;
                if (counter === this.amountElementsInPage) {
                    res.push(temp);
                    temp = [];
                    counter = 0;
                } else if (this.amountElementsInPage > this.items.length - i) {
                    temp = [];
                    counter = 0;
                    res.push(
                        this.items.slice(-(this.items.length - i))
                    );
                    break;
                }
            }
            return res;
        };
    }

    itemCount() {
        return this.items.length;
    }

    pageCount() {
        return this.pageBlocks().length;
    }

    pageItemCount(indexOfPage: number) {
        let itemsInPage = this.pageBlocks()[indexOfPage];
        if (itemsInPage) return itemsInPage.length;
        else return -1;
    }

    pageIndex(indexOfElement: number) {
        if (indexOfElement > this.itemCount() - 1 || indexOfElement < 0) {
            return -1;
        } else return Math.round((indexOfElement + 1) / this.amountElementsInPage) - 1;
    }
}
let helper = new PaginationUtil(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount());

console.log(helper.itemCount());

console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));

console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
