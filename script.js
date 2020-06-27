getAccess()
function checkAccess () {
    let access = sessionStorage.getItem('access')
    return access
}

function getAccess () {
    if (checkAccess()) {
        access()
    } else {
        var password = prompt('Enter the Password to access the encoder')
        if (password == 1910118) {
            sessionStorage.setItem('access', true)
            access()
        } else {
            getAccess()
        }
    }    
}


    
function access () {
    reload()
    var main = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var rev = ['0000', '0001', '0010', '0100', '1000', '1001', '1010', '1100', '1101', '1110', '1111', '0002', '0020', '0200', '2000', '2001', '2010', '2100', '2101', '2110', '2111', '2200', '2201', '2210', '2211', '2220']
        
    
    function encipher (text) { 
        text = text.toUpperCase()
        var processedStr, processedText, index
        processedText = ''
        for (let items of text) {
            if (main.includes(items)) {
                index = main.indexOf(items)
                processedStr = rev[index] 
            } else {
                processedStr = items
            }
            processedText += (processedStr + '9')
        }
        return processedText
    }
    
    
    
    function decipher (text) {
    
        var processedStr, processedText, index
        processedText = ''
        for (let items of text.split('9')) {
            if (rev.includes(items)) {
                index = rev.indexOf(items)
                processedStr = main[index]
            } else {
                processedStr = items
            }
            processedText += processedStr
        }
        return processedText
    }
    
    function getOutput () {
        var input = document.querySelector('.user-text').value
        var type = document.querySelector('#select-option').value
    
        if (input === '') {
            document.querySelector('.output').value = 'Nothing to decode or encode!'
        } else if (type === 'encipher') {
            document.querySelector('.output').value = encipher(input)
        } else if (type === 'decipher') {
            document.querySelector('.output').value = decipher(input)
        }
        
        var copyText = document.querySelector('.output')
        copyText.select()
        document.execCommand('copy')
    }
    
    function reload () {
        document.querySelector('.user-text').value = ''
        document.querySelector('.output').value = ''
    }
    
    document.querySelector('.enter').addEventListener('click', getOutput)
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            getOutput()
        }
    })
    
    document.querySelector('.svg-icon').addEventListener('click', reload)

}





