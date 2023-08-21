const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']


let newUsers = users.map(function(x, index) {
    return('Member' + ' ' + (index + 1) + ':' + ' ' + x);
});