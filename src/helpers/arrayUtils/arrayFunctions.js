function checkDuplicateInObject(propertyName, inputArray) {
    let seenDuplicate = false,
        testObject = {};

    inputArray.map(function (item) {
        let itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].duplicate = true;
            item.duplicate = true;
            seenDuplicate = true;
        }
        else {
            testObject[itemPropertyName] = item;
            delete item.duplicate;
        }
    });

    return seenDuplicate;
}