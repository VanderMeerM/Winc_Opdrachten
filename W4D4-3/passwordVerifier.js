const passwordVerifier = function (password) {
    

    // We tellen het aantal requirements waar het wachtwoord aan moet voldoen
    let score = 0;

    // Voor elke conditie maken we een interne check
    const isNotBlank = (pw) => {
        return pw !== null;
    }
    const isLessThan8Chars = (pw) => {
        return pw.length <= 8;
    }
    const hasUppercase = (pw) => {
        return pw.match(/[A-Z]/); 
    }
    const hasLowercase = (pw) => {
        return pw.match(/[a-z]/); 
    }
    const hasDigit = (pw) => {
        return pw.match(/[1-9]/);
    }

        const minimumConitionsReached = conditions => {
            trueConditions = conditions.filter(bool => bool);
            return trueConditions.length >= 3;
        }
    }

    const verifyPassword = password => {
        const conditions = [
            isNotBlank(pw), 
            isLessThan8Chars(pw),
            hasUppercase(pw),
            hasLowercase(pw),
            hasDigit(pw)
        ];

        const result = minimumConitionsReached(conditions) && hasLowercase(pw);
        return result;
    };
    

    // Voor elke requirement die waar is, tel 1 punt op
    if (isNotBlank(password)) score++;
    if (isLessThan8Chars(password)) score++;
    if (hasUppercase(password)) score++;
    if (hasDigit(password)) score++;
    if (hasLowercase(password)) {
        score++;
    } else {
        // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
        score = 0;
    }

    // Markeer het wachtwoord als valide als er een score van minimaal 3 is
    return {
        score: score,
        valid: score >= 3
    };


module.exports = passwordVerifier;