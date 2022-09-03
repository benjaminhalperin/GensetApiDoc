module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%FIELDNAME%}/g, product.fieldname);
    output = output.replace(/{%OBJECT%}/g, product.object);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    return output;
}