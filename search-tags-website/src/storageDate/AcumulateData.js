var AcumulateData = /** @class */ (function () {
    function AcumulateData() {
        this.setNameTags = {};
    }
    // Retorna todo o dicionário
    AcumulateData.prototype.getNameTags = function () {
        return this.setNameTags;
    };
    AcumulateData.prototype.findNameTag = function (nameTag) {
        var tagValue = this.setNameTags[nameTag];
        return tagValue !== undefined ? tagValue : null;
    };
    AcumulateData.prototype.add = function (nameTag) {
        if (!this.setNameTags[nameTag])
            this.setNameTags[nameTag] = 1;
        else
            this.setNameTags[nameTag] += 1;
    };
    AcumulateData.prototype.toString = function () {
        return JSON.stringify(this.setNameTags);
    };
    return AcumulateData;
}());
