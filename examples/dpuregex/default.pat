pat01: %abc(de)(f)g%
pat02: {a(bc|zz)}
pat02_1: {[\141-\142\143]bc}
pat03: (ABC)
pat04: -\d\D\s-
pat05: -\d\w\s-
pat06: -\d\S\s-
pat335: /.*\u<[frameset]/
octal: /\0141\142\o{143}(?#it is literally abc)/
num: /\d{18}/
hex: /\x61\x62\x{63}/ # abc
symbols: /abc[-\A\B\b\<\>\z\Zd]/
pat322: /.\uhttp:\/\/toolbar\.google\.com\/command?script=[document\.body\.insertAdjacentHTML]\u.\u<[iframe]\s+[id]=[oFileRead]\s+[src=file]:\/\/\u.*/