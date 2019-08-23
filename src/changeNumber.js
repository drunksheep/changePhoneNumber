/**
 * @method changePhoneNumber
 *
 * @param {string} elsToChange | Seletor para aplicar as mudanças
 * @param {number} newNumber | novo número de telefone à ser colocado no HREF (só funciona se elsToChange for um <a>)
 * @param {string} numberText | Texto à ser inserido nos nodes selecionados por elsToChange
 * @param {number} timeToChange | Horário para efetuar a mudança
 *
 * um script simples para trocar valores do número de telefone e href:tel após um certo horário definido.
 *
 */

const changePhoneNumber = (elsToChange, newNumber, numberText, timeToChange) => {
    let now = new Date(),
        days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        day = now.getDay(),
        hour = now.getHours();

    if (typeof newNumber !== 'number' || typeof timeToChange !== 'number') {
        console.error('newNumber e / ou timeToChange precisam ser um número inteiro');
        return false;
    }

    if (typeof elsToChange !== 'object') {
        elsToChange = document.querySelectorAll(elsToChange);
    }

    if (timeToChange > hour && day !== 'Domingo' && day !== 'Sábado' && hour > 7) {
        elsToChange.forEach(node => {
            node.innerText = numberText;

            if (node.nodeName === 'A') {
                node.href = `tel:${newNumber}`;
            }
        });
    }
}


window.onload = () => {
    changePhoneNumber('a', 1122012936, '11 22012936', 18);
}