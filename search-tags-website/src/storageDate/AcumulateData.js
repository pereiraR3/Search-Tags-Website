class AcumulateData {
    constructor() {
        this.setNameTags = {};
    }

    // Retorna todo o dicionário
    getNameTags() {
        return this.setNameTags;
    }

    findNameTag(nameTag) {
        const tagValue = this.setNameTags[nameTag];
        return tagValue !== undefined ? tagValue : null;
    }

    add(nameTag) {
        if (!this.setNameTags[nameTag])
            this.setNameTags[nameTag] = 1;
        else
            this.setNameTags[nameTag] += 1;
    }

    toString() {
        return JSON.stringify(this.setNameTags);
    }
}

module.exports = AcumulateData;
