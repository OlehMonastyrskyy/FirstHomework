$(function () {
    var $List_item = $('.list');
    var $Not_bought = $('.not-bought');
    var Template = $('.product-template').html();
    var Template2 = $('.template').html();




    function addItem(title) {
        var quantity=1;
        var node = $(Template);
        var node_1 = $(Template2);
        var $productName = node.find(".product-name");
        var $productName1 = node.find(".tovar");
        var $blLabel = node.find(".bl-lable");
        var $circleNumber = node.find(".circle");
        var $buttonPlus = node.find(".bl-plus");
        var $deleteButton = node.find(".delete-button");
        var $buttonMinus = node.find(".bl-minus");

        $blLabel.text(quantity);
        $circleNumber.text(quantity);
        $productName.text(title);
        $productName1.text(title);

//Delete action
        node.find(".delete-button").click(function () {
            node.remove();
            node_1.remove();
        });
        $buttonPlus.click(function(){
            quantity++;
            $blLabel.text(quantity);
            $circleNumber.text(quantity);

        });
        $buttonMinus.click(function() {
            if (quantity>1) {

                quantity--;
                $blLabel.text(quantity);
                $circleNumber.text(quantity);
            }
        });

        $List_item.append(node);
        $Not_bought.append(node_1);
    }

    var $addButton = $(".add-button");
    var $input = $(".text");

    function addNewItem() {
        var item_name = $input.val();
        if (item_name.trim()) {
            addItem(item_name);
        }
        $input.val("");
        $input.focus();

    }

    $addButton.click(addNewItem);
    addItem("Помідори");
    addItem("Сир");
    addItem("Печиво");
});