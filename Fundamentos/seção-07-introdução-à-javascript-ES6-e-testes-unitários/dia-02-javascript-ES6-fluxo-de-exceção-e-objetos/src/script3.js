const techList = (technologies, name1){
    if (technologies.length === 0){
        return "array vazio";
    }
    const sortedArr = technologies.sort();
    const techList = [];
    for (let i = 0; i < sortedArr.length; i += 1){
        techList.push({
            tech: sortedArr[i],
            name1,
        });
    }
    return techList;
}

module.exports = techList;