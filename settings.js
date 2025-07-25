/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2XKrOBT8F73GueyLXZWqwZgYvLAYx9vUPMggjGwWGQQYp/zvU8TJJA9zMxmeVJLo0zrdfV5BluMSTVELBq+AFLiGFHVL2hIEBmBYRREqQA+EkEIwAJY2rTxuVVeZMnctPxpdhMtGkWVPXuvBPlUWML2cmTMXG6cncOsBUu0THHwDOLo4x+tJaRnWURnmQNDRiWmfd/3+qjjlgVpHWrA+D59nm5cncOsQIS5wdjBIjFJUwGSKWhfi4mf0fcNh0WqnmXtlOXN8Z+f0mTlRSmKcldycnDSbfbY22rJOtJ/Rr6SKPSZebB+tdWAljT1eaqt0HIvluRX78dneWsxGWY+szLrTL/EhQ6EVooxi2v6479O56hgetSbPSrp+wJVnh3jqwMxnyPi8aF0RIVOVGZG+vPyMeNHsmArHNu7LcdNa/NhQca5LjTxf1Zm5bYmdUSWHcNEYX4m7xYdXTv+n75ozJkzk7XdkuQ/WSmifN3UlIZQulqbCDyNzYwdkvZBNPv8ZfW61LNaneZqu8VbQREYpL67MVPWDOWPtwNviEXJeJONKmu0nfUir4juWgi/E+sLKarjPZrkimCy3DFVHdobDiWie4hMifSX0p8tguyDjWpgYzc6DiUEYXUczqErl88toyg6P1grNzeBQc0Y+bJ7eXnRCrRWCAXfrgQIdcEkLSHGedXs8L/YADGsfBQWib+0FcOg+TKbPutesylTmVodLxmwPe7OfTwTZOnPNQm/JfLYMR+IT6AFS5AEqSxSauKR50c5RWcIDKsHgz796IEMXeheuKydwPRDhoqQvWUWSHIYfqn4cwiDIq4z6bRbo3QIVYMB+biNKcXYouz5WGSyCGNdIjyEtwSCCSYluPRCiGgeowwMIS0cYLEzfh6ltzMY7LhIsr6Mc59n9iigJKgxk9BhAVXgUA7R/7HN95ZFnRXXP8hLLiSHoAfyeme6f3/viqBt6veGHsImOedPuT65bxKy0Vcs3Ge69RwUKwYAWFeqBPQxOFVnmJ5R9FxcTC+SSksg3rqRvzOWDw8zs03pmNV9w75qCwevnnNLzsMOzvSlnDNcG6IH0zYK4ezkvCLzI8ryoSvyAV/4ofzVdIyEhvzJEQQ8k92uSLLIcK3KSrPT7XHezO7j9o0kHGCIKcVKCAdDth01WaZYxMetj6Y3HunbQ9IMGPjX8CMPdbEi2POifrZxV2qvO77A0crDBzNJ1SflAdcos7E8varJdWk//AgIGwDhmZivr1TM7mYyuWoRkVHm+jJkzf7m6voKf822ohapubXdVEplT98EvJBIOpbR40Ib18VKqC30+tYaJ4vk1WpiXydF76qrdvfS12Mw9K3zSBofWneyv+xMeFavdIttps+NemOdnbl17QluvPXRtddthqezwZ980XhpusWO1YlNIS2MiSW3a30arRhqmjTF6j+nbmEjexzN+C9Dru/MijN6mXQY7Bf9bu88QsLfeF4z3+fkbow03FTbGpzOe2o5aNjTdVt41j91WSopZmLmjYiJEfhlN1kYLbre/eoAkkEZ5kYIBwG+hAj1Q5FUXUiuL8m9q6ZplGYf7wxNYUu0z+EucopLClIABp0iCKPOyKt9vuUVOTFjGXQ9cbhtHnadbjRCfQvoxR4DWfa43Bbe/AS/IJ9VjCAAA';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Acostic';

const packname = process.env.PACKNAME || 'Acostic';

const dev = process.env.OWNER_NUMBER || '233240224852';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'ACOSTIC';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
