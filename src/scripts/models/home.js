//用于从接口获得后端数据

const model = {
    find() {
        return fetch('/uuhaodian/index.php?r=class/index&type=2')
            .then(response => response.json())
            .then(result => {
                return result;
            })
    }
}

module.exports = model