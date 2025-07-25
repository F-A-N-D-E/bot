type formatValuet = 'AUD' | 'AZN' | 'GBP' | 'AMD' | 'BYN' | 'BGN' | 'BRL' | 'HUF' | 'VND' | 'HKD' | 'GEL' | 'DKK' | 'AED' | 'USD' | 'EUR' | 'EGP' | 'INR' | 'IDR' | 'KZT' | 'CAD' | 'QAR' | 'KGS' | 'CNY' | 'MDL' | 'NZD' | 'NOK' | 'PLN' | 'RON' | 'XDR' | 'SGD' | 'TJS' | 'THB' | 'TRY' | 'TMT' | 'UZS' | 'UAH' | 'CZK' | 'SEK' | 'CHF' | 'RSD' | 'ZAR' | 'KRW' | 'JPY' 

export type Valute = {
    [key in formatValuet]: {
        ID: string
        NumCode: string
        CharCode: string
        Nominal: number
        Name: string
        Value: number
        Previous: number
    }
}