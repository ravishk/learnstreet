#Basic conversion project
import math
def integer_roman(n):
    """
    Returns a number in roman, converted from integer
    INITIALIZE: table=[['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
    """
    "REPLACE THIS CODE WITH YOUR INTEGER TO ROMAN METHOD"
    returnstring=''
    table=[['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]]
    for pair in table:
        while n-pair[1] >= 0:
            n -= pair[1]
            returnstring += pair[0]
    return returnstring

