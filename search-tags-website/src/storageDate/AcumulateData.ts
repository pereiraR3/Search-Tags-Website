interface Dictionary {
  [key: string]: number;
}

class AcumulateData {
  private setNameTags: Dictionary;

  constructor() {
    this.setNameTags = {}; 
  }

  // Retorna todo o dicionário
  public getNameTags(): Dictionary {
    return this.setNameTags;
  }

  public findNameTag(nameTag: string): number | null {
    const tagValue = this.setNameTags[nameTag];
    return tagValue !== undefined ? tagValue : null;
  }

  public add(nameTag: string): void {
    if(!this.setNameTags[nameTag])
      this.setNameTags[nameTag] = 1;
    else
      this.setNameTags[nameTag] += 1;
  }

  public toString(): string {
    return JSON.stringify(this.setNameTags);
  }
}

