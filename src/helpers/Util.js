class Util  {


    static duration = (time) => {

        const hour = time.substr(0,2);
        const minute = time.substr(3,2);
        
        let _value = '';

        if (hour !== "00") {

            _value = String(parseInt(hour)) + '시간 ';
        }

        if (minute !== "00") {

            _value = _value + String(parseInt(minute)) + '분';
        }

        return _value;

    }
}

export default Util;