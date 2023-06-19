import React, { useState } from "react";

const CascadedDropdownNew = () => {
  const [data, setData] = useState([
    {
      domainID: 92,
      targetDomain: "TD",
      targetVariableList: [
        {
          stdVariableID: 2018,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2019,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2020,
          variableName: "TDORDER",
        },
        {
          stdVariableID: 2021,
          variableName: "TDANCVAR",
        },
        {
          stdVariableID: 2022,
          variableName: "TDSTOFF",
        },
        {
          stdVariableID: 2023,
          variableName: "TDTGTPAI",
        },
        {
          stdVariableID: 2024,
          variableName: "TDMINPAI",
        },
        {
          stdVariableID: 2025,
          variableName: "TDMAXPAI",
        },
        {
          stdVariableID: 2026,
          variableName: "TDNUMRPT",
        },
      ],
    },
    {
      domainID: 93,
      targetDomain: "TS",
      targetVariableList: [
        {
          stdVariableID: 2028,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2031,
          variableName: "TSPARMCD",
        },
        {
          stdVariableID: 2032,
          variableName: "TSPARM",
        },
        {
          stdVariableID: 2033,
          variableName: "TSVAL",
        },
        {
          stdVariableID: 2034,
          variableName: "TSVALNF",
        },
        {
          stdVariableID: 2035,
          variableName: "TSVALCD",
        },
        {
          stdVariableID: 2027,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2029,
          variableName: "TSSEQ",
        },
        {
          stdVariableID: 2030,
          variableName: "TSGRPID",
        },
        {
          stdVariableID: 2036,
          variableName: "TSVCDREF",
        },
        {
          stdVariableID: 2037,
          variableName: "TSVCDVER",
        },
      ],
    },
    {
      domainID: 94,
      targetDomain: "TI",
      targetVariableList: [
        {
          stdVariableID: 2039,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2040,
          variableName: "IETESTCD",
        },
        {
          stdVariableID: 2041,
          variableName: "IETEST",
        },
        {
          stdVariableID: 2042,
          variableName: "IECAT",
        },
        {
          stdVariableID: 2043,
          variableName: "IESCAT",
        },
        {
          stdVariableID: 2038,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2044,
          variableName: "TIRL",
        },
        {
          stdVariableID: 2045,
          variableName: "TIVERS",
        },
      ],
    },
    {
      domainID: 95,
      targetDomain: "TV",
      targetVariableList: [
        {
          stdVariableID: 2047,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2051,
          variableName: "ARMCD",
        },
        {
          stdVariableID: 2052,
          variableName: "ARM",
        },
        {
          stdVariableID: 2046,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2048,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2049,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2050,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2053,
          variableName: "TVSTRL",
        },
        {
          stdVariableID: 2054,
          variableName: "TVENRL",
        },
      ],
    },
    {
      domainID: 96,
      targetDomain: "TE",
      targetVariableList: [
        {
          stdVariableID: 2056,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2057,
          variableName: "ETCD",
        },
        {
          stdVariableID: 2058,
          variableName: "ELEMENT",
        },
        {
          stdVariableID: 2061,
          variableName: "TEDUR",
        },
        {
          stdVariableID: 2055,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2059,
          variableName: "TESTRL",
        },
        {
          stdVariableID: 2060,
          variableName: "TEENRL",
        },
      ],
    },
    {
      domainID: 97,
      targetDomain: "TA",
      targetVariableList: [
        {
          stdVariableID: 2063,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2064,
          variableName: "ARMCD",
        },
        {
          stdVariableID: 2065,
          variableName: "ARM",
        },
        {
          stdVariableID: 2067,
          variableName: "ETCD",
        },
        {
          stdVariableID: 2068,
          variableName: "ELEMENT",
        },
        {
          stdVariableID: 2071,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2062,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2066,
          variableName: "TAETORD",
        },
        {
          stdVariableID: 2069,
          variableName: "TABRANCH",
        },
        {
          stdVariableID: 2070,
          variableName: "TATRANS",
        },
      ],
    },
    {
      domainID: 98,
      targetDomain: "SV",
      targetVariableList: [
        {
          stdVariableID: 2073,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2078,
          variableName: "SVSTDTC",
        },
        {
          stdVariableID: 2079,
          variableName: "SVENDTC",
        },
        {
          stdVariableID: 2072,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2074,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2075,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2076,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2077,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2080,
          variableName: "SVSTDY",
        },
        {
          stdVariableID: 2081,
          variableName: "SVENDY",
        },
        {
          stdVariableID: 2082,
          variableName: "SVUPDES",
        },
      ],
    },
    {
      domainID: 99,
      targetDomain: "SE",
      targetVariableList: [
        {
          stdVariableID: 2084,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2087,
          variableName: "ETCD",
        },
        {
          stdVariableID: 2088,
          variableName: "ELEMENT",
        },
        {
          stdVariableID: 2089,
          variableName: "SESTDTC",
        },
        {
          stdVariableID: 2090,
          variableName: "SEENDTC",
        },
        {
          stdVariableID: 2092,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2083,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2085,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2086,
          variableName: "SESEQ",
        },
        {
          stdVariableID: 2091,
          variableName: "TAETORD",
        },
        {
          stdVariableID: 2093,
          variableName: "SEUPDES",
        },
      ],
    },
    {
      domainID: 100,
      targetDomain: "CO",
      targetVariableList: [
        {
          stdVariableID: 2095,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2096,
          variableName: "RDOMAIN",
        },
        {
          stdVariableID: 2099,
          variableName: "IDVAR",
        },
        {
          stdVariableID: 2103,
          variableName: "COEVAL",
        },
        {
          stdVariableID: 2104,
          variableName: "CODTC",
        },
        {
          stdVariableID: 2094,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2097,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2098,
          variableName: "COSEQ",
        },
        {
          stdVariableID: 2100,
          variableName: "IDVARVAL",
        },
        {
          stdVariableID: 2101,
          variableName: "COREF",
        },
        {
          stdVariableID: 2102,
          variableName: "COVAL",
        },
      ],
    },
    {
      domainID: 101,
      targetDomain: "DM",
      targetVariableList: [
        {
          stdVariableID: 2106,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2109,
          variableName: "RFSTDTC",
        },
        {
          stdVariableID: 2110,
          variableName: "RFENDTC",
        },
        {
          stdVariableID: 2111,
          variableName: "RFXSTDTC",
        },
        {
          stdVariableID: 2112,
          variableName: "RFXENDTC",
        },
        {
          stdVariableID: 2113,
          variableName: "RFICDTC",
        },
        {
          stdVariableID: 2114,
          variableName: "RFPENDTC",
        },
        {
          stdVariableID: 2115,
          variableName: "DTHDTC",
        },
        {
          stdVariableID: 2116,
          variableName: "DTHFL",
        },
        {
          stdVariableID: 2120,
          variableName: "BRTHDTC",
        },
        {
          stdVariableID: 2122,
          variableName: "AGEU",
        },
        {
          stdVariableID: 2123,
          variableName: "SEX",
        },
        {
          stdVariableID: 2124,
          variableName: "RACE",
        },
        {
          stdVariableID: 2125,
          variableName: "ETHNIC",
        },
        {
          stdVariableID: 2126,
          variableName: "ARMCD",
        },
        {
          stdVariableID: 2127,
          variableName: "ARM",
        },
        {
          stdVariableID: 2128,
          variableName: "ACTARMCD",
        },
        {
          stdVariableID: 2129,
          variableName: "ACTARM",
        },
        {
          stdVariableID: 2130,
          variableName: "COUNTRY",
        },
        {
          stdVariableID: 2131,
          variableName: "DMDTC",
        },
        {
          stdVariableID: 2105,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2107,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2108,
          variableName: "SUBJID",
        },
        {
          stdVariableID: 2117,
          variableName: "SITEID",
        },
        {
          stdVariableID: 2118,
          variableName: "INVID",
        },
        {
          stdVariableID: 2119,
          variableName: "INVNAM",
        },
        {
          stdVariableID: 2121,
          variableName: "AGE",
        },
        {
          stdVariableID: 2132,
          variableName: "DMDY",
        },
      ],
    },
    {
      domainID: 102,
      targetDomain: "PR",
      targetVariableList: [
        {
          stdVariableID: 2134,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2142,
          variableName: "PRDECOD",
        },
        {
          stdVariableID: 2143,
          variableName: "PRCAT",
        },
        {
          stdVariableID: 2144,
          variableName: "PRSCAT",
        },
        {
          stdVariableID: 2145,
          variableName: "PRPRESP",
        },
        {
          stdVariableID: 2146,
          variableName: "PROCCUR",
        },
        {
          stdVariableID: 2150,
          variableName: "PRDOSU",
        },
        {
          stdVariableID: 2151,
          variableName: "PRDOSFRM",
        },
        {
          stdVariableID: 2152,
          variableName: "PRDOSFRQ",
        },
        {
          stdVariableID: 2154,
          variableName: "PRROUTE",
        },
        {
          stdVariableID: 2155,
          variableName: "PRLOC",
        },
        {
          stdVariableID: 2156,
          variableName: "PRLAT",
        },
        {
          stdVariableID: 2157,
          variableName: "PRDIR",
        },
        {
          stdVariableID: 2158,
          variableName: "PRPORTOT",
        },
        {
          stdVariableID: 2162,
          variableName: "PRSTDTC",
        },
        {
          stdVariableID: 2163,
          variableName: "PRENDTC",
        },
        {
          stdVariableID: 2169,
          variableName: "PRELTM",
        },
        {
          stdVariableID: 2171,
          variableName: "PRRFTDTC",
        },
        {
          stdVariableID: 2172,
          variableName: "PRSTRTPT",
        },
        {
          stdVariableID: 2174,
          variableName: "PRENRTPT",
        },
        {
          stdVariableID: 2166,
          variableName: "PRDUR",
        },
        {
          stdVariableID: 2133,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2135,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2136,
          variableName: "PRSEQ",
        },
        {
          stdVariableID: 2137,
          variableName: "PRGRPID",
        },
        {
          stdVariableID: 2138,
          variableName: "PRSPID",
        },
        {
          stdVariableID: 2139,
          variableName: "PRLNKID",
        },
        {
          stdVariableID: 2140,
          variableName: "PRLNKGRP",
        },
        {
          stdVariableID: 2141,
          variableName: "PRTRT",
        },
        {
          stdVariableID: 2147,
          variableName: "PRINDC",
        },
        {
          stdVariableID: 2148,
          variableName: "PRDOSE",
        },
        {
          stdVariableID: 2149,
          variableName: "PRDOSTXT",
        },
        {
          stdVariableID: 2153,
          variableName: "PRDOSRGM",
        },
        {
          stdVariableID: 2159,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2160,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2161,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2164,
          variableName: "PRSTDY",
        },
        {
          stdVariableID: 2165,
          variableName: "PRENDY",
        },
        {
          stdVariableID: 2167,
          variableName: "PRTPT",
        },
        {
          stdVariableID: 2168,
          variableName: "PRTPTNUM",
        },
        {
          stdVariableID: 2170,
          variableName: "PRTPTREF",
        },
        {
          stdVariableID: 2173,
          variableName: "PRSTTPT",
        },
        {
          stdVariableID: 2175,
          variableName: "PRENTPT",
        },
      ],
    },
    {
      domainID: 103,
      targetDomain: "EC",
      targetVariableList: [
        {
          stdVariableID: 2177,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2185,
          variableName: "ECTRT",
        },
        {
          stdVariableID: 2186,
          variableName: "ECMOOD",
        },
        {
          stdVariableID: 2187,
          variableName: "ECCAT",
        },
        {
          stdVariableID: 2188,
          variableName: "ECSCAT",
        },
        {
          stdVariableID: 2189,
          variableName: "ECPRESP",
        },
        {
          stdVariableID: 2190,
          variableName: "ECOCCUR",
        },
        {
          stdVariableID: 2193,
          variableName: "ECDOSU",
        },
        {
          stdVariableID: 2194,
          variableName: "ECDOSFRM",
        },
        {
          stdVariableID: 2195,
          variableName: "ECDOSFRQ",
        },
        {
          stdVariableID: 2198,
          variableName: "ECROUTE",
        },
        {
          stdVariableID: 2200,
          variableName: "ECLOC",
        },
        {
          stdVariableID: 2201,
          variableName: "ECLAT",
        },
        {
          stdVariableID: 2202,
          variableName: "ECDIR",
        },
        {
          stdVariableID: 2203,
          variableName: "ECPORTOT",
        },
        {
          stdVariableID: 2204,
          variableName: "ECFAST",
        },
        {
          stdVariableID: 2206,
          variableName: "ECPSTRGU",
        },
        {
          stdVariableID: 2207,
          variableName: "ECADJ",
        },
        {
          stdVariableID: 2208,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2209,
          variableName: "ECSTDTC",
        },
        {
          stdVariableID: 2210,
          variableName: "ECENDTC",
        },
        {
          stdVariableID: 2213,
          variableName: "ECDUR",
        },
        {
          stdVariableID: 2216,
          variableName: "ECELTM",
        },
        {
          stdVariableID: 2218,
          variableName: "ECRFTDTC",
        },
        {
          stdVariableID: 2176,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2178,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2179,
          variableName: "ECSEQ",
        },
        {
          stdVariableID: 2180,
          variableName: "ECGRPID",
        },
        {
          stdVariableID: 2181,
          variableName: "ECREFID",
        },
        {
          stdVariableID: 2182,
          variableName: "ECSPID",
        },
        {
          stdVariableID: 2183,
          variableName: "ECLNKID",
        },
        {
          stdVariableID: 2184,
          variableName: "ECLNKGRP",
        },
        {
          stdVariableID: 2191,
          variableName: "ECDOSE",
        },
        {
          stdVariableID: 2192,
          variableName: "ECDOSTXT",
        },
        {
          stdVariableID: 2196,
          variableName: "ECDOSTOT",
        },
        {
          stdVariableID: 2197,
          variableName: "ECDOSRGM",
        },
        {
          stdVariableID: 2199,
          variableName: "ECLOT",
        },
        {
          stdVariableID: 2205,
          variableName: "ECPSTRG",
        },
        {
          stdVariableID: 2211,
          variableName: "ECSTDY",
        },
        {
          stdVariableID: 2212,
          variableName: "ECENDY",
        },
        {
          stdVariableID: 2214,
          variableName: "ECTPT",
        },
        {
          stdVariableID: 2215,
          variableName: "ECTPTNUM",
        },
        {
          stdVariableID: 2217,
          variableName: "ECTPTREF",
        },
      ],
    },
    {
      domainID: 104,
      targetDomain: "SU",
      targetVariableList: [
        {
          stdVariableID: 2220,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2227,
          variableName: "SUDECOD",
        },
        {
          stdVariableID: 2228,
          variableName: "SUCAT",
        },
        {
          stdVariableID: 2229,
          variableName: "SUSCAT",
        },
        {
          stdVariableID: 2230,
          variableName: "SUPRESP",
        },
        {
          stdVariableID: 2231,
          variableName: "SUOCCUR",
        },
        {
          stdVariableID: 2232,
          variableName: "SUSTAT",
        },
        {
          stdVariableID: 2234,
          variableName: "SUCLAS",
        },
        {
          stdVariableID: 2235,
          variableName: "SUCLASCD",
        },
        {
          stdVariableID: 2238,
          variableName: "SUDOSU",
        },
        {
          stdVariableID: 2239,
          variableName: "SUDOSFRM",
        },
        {
          stdVariableID: 2240,
          variableName: "SUDOSFRQ",
        },
        {
          stdVariableID: 2242,
          variableName: "SUROUTE",
        },
        {
          stdVariableID: 2243,
          variableName: "SUSTDTC",
        },
        {
          stdVariableID: 2244,
          variableName: "SUENDTC",
        },
        {
          stdVariableID: 2247,
          variableName: "SUDUR",
        },
        {
          stdVariableID: 2248,
          variableName: "SUSTRF",
        },
        {
          stdVariableID: 2249,
          variableName: "SUENRF",
        },
        {
          stdVariableID: 2250,
          variableName: "SUSTRTPT",
        },
        {
          stdVariableID: 2252,
          variableName: "SUENRTPT",
        },
        {
          stdVariableID: 2219,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2221,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2222,
          variableName: "SUSEQ",
        },
        {
          stdVariableID: 2223,
          variableName: "SUGRPID",
        },
        {
          stdVariableID: 2224,
          variableName: "SUSPID",
        },
        {
          stdVariableID: 2225,
          variableName: "SUTRT",
        },
        {
          stdVariableID: 2226,
          variableName: "SUMODIFY",
        },
        {
          stdVariableID: 2233,
          variableName: "SUREASND",
        },
        {
          stdVariableID: 2236,
          variableName: "SUDOSE",
        },
        {
          stdVariableID: 2237,
          variableName: "SUDOSTXT",
        },
        {
          stdVariableID: 2241,
          variableName: "SUDOSTOT",
        },
        {
          stdVariableID: 2245,
          variableName: "SUSTDY",
        },
        {
          stdVariableID: 2246,
          variableName: "SUENDY",
        },
        {
          stdVariableID: 2251,
          variableName: "SUSTTPT",
        },
        {
          stdVariableID: 2253,
          variableName: "SUENTPT",
        },
      ],
    },
    {
      domainID: 105,
      targetDomain: "EX",
      targetVariableList: [
        {
          stdVariableID: 2255,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2263,
          variableName: "EXTRT",
        },
        {
          stdVariableID: 2264,
          variableName: "EXCAT",
        },
        {
          stdVariableID: 2265,
          variableName: "EXSCAT",
        },
        {
          stdVariableID: 2268,
          variableName: "EXDOSU",
        },
        {
          stdVariableID: 2269,
          variableName: "EXDOSFRM",
        },
        {
          stdVariableID: 2270,
          variableName: "EXDOSFRQ",
        },
        {
          stdVariableID: 2272,
          variableName: "EXROUTE",
        },
        {
          stdVariableID: 2274,
          variableName: "EXLOC",
        },
        {
          stdVariableID: 2275,
          variableName: "EXLAT",
        },
        {
          stdVariableID: 2276,
          variableName: "EXDIR",
        },
        {
          stdVariableID: 2277,
          variableName: "EXFAST",
        },
        {
          stdVariableID: 2278,
          variableName: "EXADJ",
        },
        {
          stdVariableID: 2279,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2280,
          variableName: "EXSTDTC",
        },
        {
          stdVariableID: 2281,
          variableName: "EXENDTC",
        },
        {
          stdVariableID: 2284,
          variableName: "EXDUR",
        },
        {
          stdVariableID: 2287,
          variableName: "EXELTM",
        },
        {
          stdVariableID: 2289,
          variableName: "EXRFTDTC",
        },
        {
          stdVariableID: 2254,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2256,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2257,
          variableName: "EXSEQ",
        },
        {
          stdVariableID: 2258,
          variableName: "EXGRPID",
        },
        {
          stdVariableID: 2259,
          variableName: "EXREFID",
        },
        {
          stdVariableID: 2260,
          variableName: "EXSPID",
        },
        {
          stdVariableID: 2261,
          variableName: "EXLNKID",
        },
        {
          stdVariableID: 2262,
          variableName: "EXLNKGRP",
        },
        {
          stdVariableID: 2266,
          variableName: "EXDOSE",
        },
        {
          stdVariableID: 2267,
          variableName: "EXDOSTXT",
        },
        {
          stdVariableID: 2271,
          variableName: "EXDOSRGM",
        },
        {
          stdVariableID: 2273,
          variableName: "EXLOT",
        },
        {
          stdVariableID: 2282,
          variableName: "EXSTDY",
        },
        {
          stdVariableID: 2283,
          variableName: "EXENDY",
        },
        {
          stdVariableID: 2285,
          variableName: "EXTPT",
        },
        {
          stdVariableID: 2286,
          variableName: "EXTPTNUM",
        },
        {
          stdVariableID: 2288,
          variableName: "EXTPTREF",
        },
      ],
    },
    {
      domainID: 106,
      targetDomain: "CM",
      targetVariableList: [
        {
          stdVariableID: 2291,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2298,
          variableName: "CMDECOD",
        },
        {
          stdVariableID: 2299,
          variableName: "CMCAT",
        },
        {
          stdVariableID: 2300,
          variableName: "CMSCAT",
        },
        {
          stdVariableID: 2301,
          variableName: "CMPRESP",
        },
        {
          stdVariableID: 2302,
          variableName: "CMOCCUR",
        },
        {
          stdVariableID: 2303,
          variableName: "CMSTAT",
        },
        {
          stdVariableID: 2306,
          variableName: "CMCLAS",
        },
        {
          stdVariableID: 2307,
          variableName: "CMCLASCD",
        },
        {
          stdVariableID: 2310,
          variableName: "CMDOSU",
        },
        {
          stdVariableID: 2311,
          variableName: "CMDOSFRM",
        },
        {
          stdVariableID: 2312,
          variableName: "CMDOSFRQ",
        },
        {
          stdVariableID: 2315,
          variableName: "CMROUTE",
        },
        {
          stdVariableID: 2316,
          variableName: "CMSTDTC",
        },
        {
          stdVariableID: 2317,
          variableName: "CMENDTC",
        },
        {
          stdVariableID: 2320,
          variableName: "CMDUR",
        },
        {
          stdVariableID: 2321,
          variableName: "CMSTRF",
        },
        {
          stdVariableID: 2322,
          variableName: "CMENRF",
        },
        {
          stdVariableID: 2323,
          variableName: "CMSTRTPT",
        },
        {
          stdVariableID: 2325,
          variableName: "CMENRTPT",
        },
        {
          stdVariableID: 2290,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2292,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2293,
          variableName: "CMSEQ",
        },
        {
          stdVariableID: 2294,
          variableName: "CMGRPID",
        },
        {
          stdVariableID: 2295,
          variableName: "CMSPID",
        },
        {
          stdVariableID: 2296,
          variableName: "CMTRT",
        },
        {
          stdVariableID: 2297,
          variableName: "CMMODIFY",
        },
        {
          stdVariableID: 2304,
          variableName: "CMREASND",
        },
        {
          stdVariableID: 2305,
          variableName: "CMINDC",
        },
        {
          stdVariableID: 2308,
          variableName: "CMDOSE",
        },
        {
          stdVariableID: 2309,
          variableName: "CMDOSTXT",
        },
        {
          stdVariableID: 2313,
          variableName: "CMDOSTOT",
        },
        {
          stdVariableID: 2314,
          variableName: "CMDOSRGM",
        },
        {
          stdVariableID: 2318,
          variableName: "CMSTDY",
        },
        {
          stdVariableID: 2319,
          variableName: "CMENDY",
        },
        {
          stdVariableID: 2324,
          variableName: "CMSTTPT",
        },
        {
          stdVariableID: 2326,
          variableName: "CMENTPT",
        },
      ],
    },
    {
      domainID: 107,
      targetDomain: "HO",
      targetVariableList: [
        {
          stdVariableID: 2328,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2335,
          variableName: "HODECOD",
        },
        {
          stdVariableID: 2336,
          variableName: "HOCAT",
        },
        {
          stdVariableID: 2337,
          variableName: "HOSCAT",
        },
        {
          stdVariableID: 2338,
          variableName: "HOPRESP",
        },
        {
          stdVariableID: 2339,
          variableName: "HOOCCUR",
        },
        {
          stdVariableID: 2340,
          variableName: "HOSTAT",
        },
        {
          stdVariableID: 2342,
          variableName: "HODTC",
        },
        {
          stdVariableID: 2343,
          variableName: "HOSTDTC",
        },
        {
          stdVariableID: 2344,
          variableName: "HOENDTC",
        },
        {
          stdVariableID: 2348,
          variableName: "HODUR",
        },
        {
          stdVariableID: 2349,
          variableName: "HOSTRTPT",
        },
        {
          stdVariableID: 2351,
          variableName: "HOENRTPT",
        },
        {
          stdVariableID: 2327,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2329,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2330,
          variableName: "HOSEQ",
        },
        {
          stdVariableID: 2331,
          variableName: "HOGRPID",
        },
        {
          stdVariableID: 2332,
          variableName: "HOREFID",
        },
        {
          stdVariableID: 2333,
          variableName: "HOSPID",
        },
        {
          stdVariableID: 2334,
          variableName: "HOTERM",
        },
        {
          stdVariableID: 2341,
          variableName: "HOREASND",
        },
        {
          stdVariableID: 2345,
          variableName: "HODY",
        },
        {
          stdVariableID: 2346,
          variableName: "HOSTDY",
        },
        {
          stdVariableID: 2347,
          variableName: "HOENDY",
        },
        {
          stdVariableID: 2350,
          variableName: "HOSTTPT",
        },
        {
          stdVariableID: 2352,
          variableName: "HOENTPT",
        },
      ],
    },
    {
      domainID: 108,
      targetDomain: "CE",
      targetVariableList: [
        {
          stdVariableID: 2354,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2361,
          variableName: "CEDECOD",
        },
        {
          stdVariableID: 2362,
          variableName: "CECAT",
        },
        {
          stdVariableID: 2363,
          variableName: "CESCAT",
        },
        {
          stdVariableID: 2364,
          variableName: "CEPRESP",
        },
        {
          stdVariableID: 2365,
          variableName: "CEOCCUR",
        },
        {
          stdVariableID: 2366,
          variableName: "CESTAT",
        },
        {
          stdVariableID: 2368,
          variableName: "CEBODSYS",
        },
        {
          stdVariableID: 2369,
          variableName: "CESEV",
        },
        {
          stdVariableID: 2370,
          variableName: "CEDTC",
        },
        {
          stdVariableID: 2371,
          variableName: "CESTDTC",
        },
        {
          stdVariableID: 2372,
          variableName: "CEENDTC",
        },
        {
          stdVariableID: 2374,
          variableName: "CESTRF",
        },
        {
          stdVariableID: 2375,
          variableName: "CEENRF",
        },
        {
          stdVariableID: 2376,
          variableName: "CESTRTPT",
        },
        {
          stdVariableID: 2378,
          variableName: "CEENRTPT",
        },
        {
          stdVariableID: 2353,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2355,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2356,
          variableName: "CESEQ",
        },
        {
          stdVariableID: 2357,
          variableName: "CEGRPID",
        },
        {
          stdVariableID: 2358,
          variableName: "CEREFID",
        },
        {
          stdVariableID: 2359,
          variableName: "CESPID",
        },
        {
          stdVariableID: 2360,
          variableName: "CETERM",
        },
        {
          stdVariableID: 2367,
          variableName: "CEREASND",
        },
        {
          stdVariableID: 2373,
          variableName: "CEDY",
        },
        {
          stdVariableID: 2377,
          variableName: "CESTTPT",
        },
        {
          stdVariableID: 2379,
          variableName: "CEENTPT",
        },
      ],
    },
    {
      domainID: 109,
      targetDomain: "DV",
      targetVariableList: [
        {
          stdVariableID: 2381,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2387,
          variableName: "DVDECOD",
        },
        {
          stdVariableID: 2388,
          variableName: "DVCAT",
        },
        {
          stdVariableID: 2389,
          variableName: "DVSCAT",
        },
        {
          stdVariableID: 2390,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2391,
          variableName: "DVSTDTC",
        },
        {
          stdVariableID: 2392,
          variableName: "DVENDTC",
        },
        {
          stdVariableID: 2380,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2382,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2383,
          variableName: "DVSEQ",
        },
        {
          stdVariableID: 2384,
          variableName: "DVREFID",
        },
        {
          stdVariableID: 2385,
          variableName: "DVSPID",
        },
        {
          stdVariableID: 2386,
          variableName: "DVTERM",
        },
      ],
    },
    {
      domainID: 110,
      targetDomain: "MH",
      targetVariableList: [
        {
          stdVariableID: 2394,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2402,
          variableName: "MHDECOD",
        },
        {
          stdVariableID: 2403,
          variableName: "MHCAT",
        },
        {
          stdVariableID: 2404,
          variableName: "MHSCAT",
        },
        {
          stdVariableID: 2405,
          variableName: "MHPRESP",
        },
        {
          stdVariableID: 2406,
          variableName: "MHOCCUR",
        },
        {
          stdVariableID: 2407,
          variableName: "MHSTAT",
        },
        {
          stdVariableID: 2409,
          variableName: "MHBODSYS",
        },
        {
          stdVariableID: 2410,
          variableName: "MHDTC",
        },
        {
          stdVariableID: 2411,
          variableName: "MHSTDTC",
        },
        {
          stdVariableID: 2412,
          variableName: "MHENDTC",
        },
        {
          stdVariableID: 2414,
          variableName: "MHENRF",
        },
        {
          stdVariableID: 2415,
          variableName: "MHENRTPT",
        },
        {
          stdVariableID: 2393,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2395,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2396,
          variableName: "MHSEQ",
        },
        {
          stdVariableID: 2397,
          variableName: "MHGRPID",
        },
        {
          stdVariableID: 2398,
          variableName: "MHREFID",
        },
        {
          stdVariableID: 2399,
          variableName: "MHSPID",
        },
        {
          stdVariableID: 2400,
          variableName: "MHTERM",
        },
        {
          stdVariableID: 2401,
          variableName: "MHMODIFY",
        },
        {
          stdVariableID: 2408,
          variableName: "MHREASND",
        },
        {
          stdVariableID: 2413,
          variableName: "MHDY",
        },
        {
          stdVariableID: 2416,
          variableName: "MHENTPT",
        },
      ],
    },
    {
      domainID: 111,
      targetDomain: "DS",
      targetVariableList: [
        {
          stdVariableID: 2418,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2425,
          variableName: "DSDECOD",
        },
        {
          stdVariableID: 2426,
          variableName: "DSCAT",
        },
        {
          stdVariableID: 2427,
          variableName: "DSSCAT",
        },
        {
          stdVariableID: 2428,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2429,
          variableName: "DSDTC",
        },
        {
          stdVariableID: 2430,
          variableName: "DSSTDTC",
        },
        {
          stdVariableID: 2417,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2419,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2420,
          variableName: "DSSEQ",
        },
        {
          stdVariableID: 2421,
          variableName: "DSGRPID",
        },
        {
          stdVariableID: 2422,
          variableName: "DSREFID",
        },
        {
          stdVariableID: 2423,
          variableName: "DSSPID",
        },
        {
          stdVariableID: 2424,
          variableName: "DSTERM",
        },
        {
          stdVariableID: 2431,
          variableName: "DSSTDY",
        },
      ],
    },
    {
      domainID: 112,
      targetDomain: "AE",
      targetVariableList: [
        {
          stdVariableID: 2433,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2441,
          variableName: "AELLT",
        },
        {
          stdVariableID: 2442,
          variableName: "AELLTCD",
        },
        {
          stdVariableID: 2443,
          variableName: "AEDECOD",
        },
        {
          stdVariableID: 2444,
          variableName: "AEPTCD",
        },
        {
          stdVariableID: 2445,
          variableName: "AEHLT",
        },
        {
          stdVariableID: 2446,
          variableName: "AEHLTCD",
        },
        {
          stdVariableID: 2447,
          variableName: "AEHLGT",
        },
        {
          stdVariableID: 2448,
          variableName: "AEHLGTCD",
        },
        {
          stdVariableID: 2449,
          variableName: "AECAT",
        },
        {
          stdVariableID: 2450,
          variableName: "AESCAT",
        },
        {
          stdVariableID: 2451,
          variableName: "AEPRESP",
        },
        {
          stdVariableID: 2452,
          variableName: "AEBODSYS",
        },
        {
          stdVariableID: 2453,
          variableName: "AEBDSYCD",
        },
        {
          stdVariableID: 2454,
          variableName: "AESOC",
        },
        {
          stdVariableID: 2455,
          variableName: "AESOCCD",
        },
        {
          stdVariableID: 2456,
          variableName: "AELOC",
        },
        {
          stdVariableID: 2457,
          variableName: "AESEV",
        },
        {
          stdVariableID: 2458,
          variableName: "AESER",
        },
        {
          stdVariableID: 2459,
          variableName: "AEACN",
        },
        {
          stdVariableID: 2461,
          variableName: "AEREL",
        },
        {
          stdVariableID: 2463,
          variableName: "AEPATT",
        },
        {
          stdVariableID: 2464,
          variableName: "AEOUT",
        },
        {
          stdVariableID: 2465,
          variableName: "AESCAN",
        },
        {
          stdVariableID: 2466,
          variableName: "AESCONG",
        },
        {
          stdVariableID: 2467,
          variableName: "AESDISAB",
        },
        {
          stdVariableID: 2468,
          variableName: "AESDTH",
        },
        {
          stdVariableID: 2469,
          variableName: "AESHOSP",
        },
        {
          stdVariableID: 2470,
          variableName: "AESLIFE",
        },
        {
          stdVariableID: 2471,
          variableName: "AESOD",
        },
        {
          stdVariableID: 2472,
          variableName: "AESMIE",
        },
        {
          stdVariableID: 2473,
          variableName: "AECONTRT",
        },
        {
          stdVariableID: 2474,
          variableName: "AETOXGR",
        },
        {
          stdVariableID: 2475,
          variableName: "AESTDTC",
        },
        {
          stdVariableID: 2476,
          variableName: "AEENDTC",
        },
        {
          stdVariableID: 2479,
          variableName: "AEDUR",
        },
        {
          stdVariableID: 2480,
          variableName: "AEENRF",
        },
        {
          stdVariableID: 2481,
          variableName: "AEENRTPT",
        },
        {
          stdVariableID: 2432,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2434,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2435,
          variableName: "AESEQ",
        },
        {
          stdVariableID: 2436,
          variableName: "AEGRPID",
        },
        {
          stdVariableID: 2437,
          variableName: "AEREFID",
        },
        {
          stdVariableID: 2438,
          variableName: "AESPID",
        },
        {
          stdVariableID: 2439,
          variableName: "AETERM",
        },
        {
          stdVariableID: 2440,
          variableName: "AEMODIFY",
        },
        {
          stdVariableID: 2460,
          variableName: "AEACNOTH",
        },
        {
          stdVariableID: 2462,
          variableName: "AERELNST",
        },
        {
          stdVariableID: 2477,
          variableName: "AESTDY",
        },
        {
          stdVariableID: 2478,
          variableName: "AEENDY",
        },
        {
          stdVariableID: 2482,
          variableName: "AEENTPT",
        },
      ],
    },
    {
      domainID: 113,
      targetDomain: "SR",
      targetVariableList: [
        {
          stdVariableID: 2483,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2484,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2485,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2486,
          variableName: "SRSEQ",
        },
        {
          stdVariableID: 2487,
          variableName: "SRGRPID",
        },
        {
          stdVariableID: 2488,
          variableName: "SRREFID",
        },
        {
          stdVariableID: 2489,
          variableName: "SRSPID",
        },
        {
          stdVariableID: 2490,
          variableName: "SRTESTCD",
        },
        {
          stdVariableID: 2491,
          variableName: "SRTEST",
        },
        {
          stdVariableID: 2492,
          variableName: "SROBJ",
        },
        {
          stdVariableID: 2493,
          variableName: "SRCAT",
        },
        {
          stdVariableID: 2494,
          variableName: "SRSCAT",
        },
        {
          stdVariableID: 2495,
          variableName: "SRORRES",
        },
        {
          stdVariableID: 2496,
          variableName: "SRORRESU",
        },
        {
          stdVariableID: 2497,
          variableName: "SRSTRESC",
        },
        {
          stdVariableID: 2498,
          variableName: "SRSTRESN",
        },
        {
          stdVariableID: 2499,
          variableName: "SRSTRESU",
        },
        {
          stdVariableID: 2500,
          variableName: "SRSTAT",
        },
        {
          stdVariableID: 2501,
          variableName: "SRREASND",
        },
        {
          stdVariableID: 2502,
          variableName: "SRNAM",
        },
        {
          stdVariableID: 2503,
          variableName: "SRSPEC",
        },
        {
          stdVariableID: 2504,
          variableName: "SRLOC",
        },
        {
          stdVariableID: 2505,
          variableName: "SRLAT",
        },
        {
          stdVariableID: 2506,
          variableName: "SRMETHOD",
        },
        {
          stdVariableID: 2507,
          variableName: "SREVAL",
        },
        {
          stdVariableID: 2508,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2509,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2510,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2511,
          variableName: "SRDTC",
        },
        {
          stdVariableID: 2512,
          variableName: "SRDY",
        },
        {
          stdVariableID: 2513,
          variableName: "SRTPT",
        },
        {
          stdVariableID: 2514,
          variableName: "SRTPTNUM",
        },
        {
          stdVariableID: 2515,
          variableName: "SRELTM",
        },
        {
          stdVariableID: 2516,
          variableName: "SRTPTREF",
        },
        {
          stdVariableID: 2517,
          variableName: "SRRFTDTC",
        },
      ],
    },
    {
      domainID: 114,
      targetDomain: "SS",
      targetVariableList: [
        {
          stdVariableID: 2519,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2524,
          variableName: "SSTESTCD",
        },
        {
          stdVariableID: 2525,
          variableName: "SSTEST",
        },
        {
          stdVariableID: 2526,
          variableName: "SSCAT",
        },
        {
          stdVariableID: 2527,
          variableName: "SSSCAT",
        },
        {
          stdVariableID: 2529,
          variableName: "SSSTRESC",
        },
        {
          stdVariableID: 2530,
          variableName: "SSSTAT",
        },
        {
          stdVariableID: 2532,
          variableName: "SSEVAL",
        },
        {
          stdVariableID: 2536,
          variableName: "SSDTC",
        },
        {
          stdVariableID: 2518,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2520,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2521,
          variableName: "SSSEQ",
        },
        {
          stdVariableID: 2522,
          variableName: "SSGRPID",
        },
        {
          stdVariableID: 2523,
          variableName: "SSSPID",
        },
        {
          stdVariableID: 2528,
          variableName: "SSORRES",
        },
        {
          stdVariableID: 2531,
          variableName: "SSREASND",
        },
        {
          stdVariableID: 2533,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2534,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2535,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2537,
          variableName: "SSDY",
        },
      ],
    },
    {
      domainID: 115,
      targetDomain: "RP",
      targetVariableList: [
        {
          stdVariableID: 2539,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2545,
          variableName: "RPTESTCD",
        },
        {
          stdVariableID: 2546,
          variableName: "RPTEST",
        },
        {
          stdVariableID: 2547,
          variableName: "RPCAT",
        },
        {
          stdVariableID: 2548,
          variableName: "RPSCAT",
        },
        {
          stdVariableID: 2550,
          variableName: "RPORRESU",
        },
        {
          stdVariableID: 2553,
          variableName: "RPSTRESU",
        },
        {
          stdVariableID: 2554,
          variableName: "RPSTAT",
        },
        {
          stdVariableID: 2556,
          variableName: "RPBLFL",
        },
        {
          stdVariableID: 2557,
          variableName: "RPDRVFL",
        },
        {
          stdVariableID: 2561,
          variableName: "RPDTC",
        },
        {
          stdVariableID: 2538,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2540,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2541,
          variableName: "RPSEQ",
        },
        {
          stdVariableID: 2542,
          variableName: "RPGRPID",
        },
        {
          stdVariableID: 2543,
          variableName: "RPREFID",
        },
        {
          stdVariableID: 2544,
          variableName: "RPSPID",
        },
        {
          stdVariableID: 2549,
          variableName: "RPORRES",
        },
        {
          stdVariableID: 2551,
          variableName: "RPSTRESC",
        },
        {
          stdVariableID: 2552,
          variableName: "RPSTRESN",
        },
        {
          stdVariableID: 2555,
          variableName: "RPREASND",
        },
        {
          stdVariableID: 2558,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2559,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2560,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2562,
          variableName: "RPDY",
        },
      ],
    },
    {
      domainID: 116,
      targetDomain: "MO",
      targetVariableList: [
        {
          stdVariableID: 2564,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2571,
          variableName: "MOTESTCD",
        },
        {
          stdVariableID: 2572,
          variableName: "MOTEST",
        },
        {
          stdVariableID: 2573,
          variableName: "MOCAT",
        },
        {
          stdVariableID: 2574,
          variableName: "MOSCAT",
        },
        {
          stdVariableID: 2575,
          variableName: "MOPOS",
        },
        {
          stdVariableID: 2577,
          variableName: "MOORRESU",
        },
        {
          stdVariableID: 2580,
          variableName: "MOSTRESU",
        },
        {
          stdVariableID: 2581,
          variableName: "MOSTAT",
        },
        {
          stdVariableID: 2585,
          variableName: "MOLOC",
        },
        {
          stdVariableID: 2586,
          variableName: "MOLAT",
        },
        {
          stdVariableID: 2587,
          variableName: "MODIR",
        },
        {
          stdVariableID: 2588,
          variableName: "MOPORTOT",
        },
        {
          stdVariableID: 2589,
          variableName: "MOMETHOD",
        },
        {
          stdVariableID: 2590,
          variableName: "MOANMETH",
        },
        {
          stdVariableID: 2591,
          variableName: "MOBLFL",
        },
        {
          stdVariableID: 2592,
          variableName: "MODRVFL",
        },
        {
          stdVariableID: 2593,
          variableName: "MOEVAL",
        },
        {
          stdVariableID: 2597,
          variableName: "MODTC",
        },
        {
          stdVariableID: 2601,
          variableName: "MOELTM",
        },
        {
          stdVariableID: 2603,
          variableName: "MORFTDTC",
        },
        {
          stdVariableID: 2563,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2565,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2566,
          variableName: "MOSEQ",
        },
        {
          stdVariableID: 2567,
          variableName: "MOGRPID",
        },
        {
          stdVariableID: 2568,
          variableName: "MOREFID",
        },
        {
          stdVariableID: 2569,
          variableName: "MOSPID",
        },
        {
          stdVariableID: 2570,
          variableName: "MOLNKID",
        },
        {
          stdVariableID: 2576,
          variableName: "MOORRES",
        },
        {
          stdVariableID: 2578,
          variableName: "MOSTRESC",
        },
        {
          stdVariableID: 2579,
          variableName: "MOSTRESN",
        },
        {
          stdVariableID: 2582,
          variableName: "MOREASND",
        },
        {
          stdVariableID: 2583,
          variableName: "MOXFN",
        },
        {
          stdVariableID: 2584,
          variableName: "MONAM",
        },
        {
          stdVariableID: 2594,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2595,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2596,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2598,
          variableName: "MODY",
        },
        {
          stdVariableID: 2599,
          variableName: "MOTPT",
        },
        {
          stdVariableID: 2600,
          variableName: "MOTPTNUM",
        },
        {
          stdVariableID: 2602,
          variableName: "MOTPTREF",
        },
      ],
    },
    {
      domainID: 117,
      targetDomain: "MI",
      targetVariableList: [
        {
          stdVariableID: 2605,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2611,
          variableName: "MITESTCD",
        },
        {
          stdVariableID: 2612,
          variableName: "MITEST",
        },
        {
          stdVariableID: 2614,
          variableName: "MICAT",
        },
        {
          stdVariableID: 2615,
          variableName: "MISCAT",
        },
        {
          stdVariableID: 2617,
          variableName: "MIORRESU",
        },
        {
          stdVariableID: 2620,
          variableName: "MISTRESU",
        },
        {
          stdVariableID: 2621,
          variableName: "MIRESCAT",
        },
        {
          stdVariableID: 2622,
          variableName: "MISTAT",
        },
        {
          stdVariableID: 2625,
          variableName: "MISPEC",
        },
        {
          stdVariableID: 2626,
          variableName: "MISPCCND",
        },
        {
          stdVariableID: 2627,
          variableName: "MILOC",
        },
        {
          stdVariableID: 2628,
          variableName: "MILAT",
        },
        {
          stdVariableID: 2629,
          variableName: "MIDIR",
        },
        {
          stdVariableID: 2630,
          variableName: "MIMETHOD",
        },
        {
          stdVariableID: 2631,
          variableName: "MIBLFL",
        },
        {
          stdVariableID: 2632,
          variableName: "MIEVAL",
        },
        {
          stdVariableID: 2636,
          variableName: "MIDTC",
        },
        {
          stdVariableID: 2604,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2606,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2607,
          variableName: "MISEQ",
        },
        {
          stdVariableID: 2608,
          variableName: "MIGRPID",
        },
        {
          stdVariableID: 2609,
          variableName: "MIREFID",
        },
        {
          stdVariableID: 2610,
          variableName: "MISPID",
        },
        {
          stdVariableID: 2613,
          variableName: "MITSTDTL",
        },
        {
          stdVariableID: 2616,
          variableName: "MIORRES",
        },
        {
          stdVariableID: 2618,
          variableName: "MISTRESC",
        },
        {
          stdVariableID: 2619,
          variableName: "MISTRESN",
        },
        {
          stdVariableID: 2623,
          variableName: "MIREASND",
        },
        {
          stdVariableID: 2624,
          variableName: "MINAM",
        },
        {
          stdVariableID: 2633,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2634,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2635,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2637,
          variableName: "MIDY",
        },
      ],
    },
    {
      domainID: 118,
      targetDomain: "IS",
      targetVariableList: [
        {
          stdVariableID: 2639,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2645,
          variableName: "ISTESTCD",
        },
        {
          stdVariableID: 2646,
          variableName: "ISTEST",
        },
        {
          stdVariableID: 2647,
          variableName: "ISCAT",
        },
        {
          stdVariableID: 2648,
          variableName: "ISSCAT",
        },
        {
          stdVariableID: 2650,
          variableName: "ISORRESU",
        },
        {
          stdVariableID: 2653,
          variableName: "ISSTRESU",
        },
        {
          stdVariableID: 2654,
          variableName: "ISSTAT",
        },
        {
          stdVariableID: 2657,
          variableName: "ISSPEC",
        },
        {
          stdVariableID: 2659,
          variableName: "ISBLFL",
        },
        {
          stdVariableID: 2664,
          variableName: "ISDTC",
        },
        {
          stdVariableID: 2638,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2640,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2641,
          variableName: "ISSEQ",
        },
        {
          stdVariableID: 2642,
          variableName: "ISGRPID",
        },
        {
          stdVariableID: 2643,
          variableName: "ISREFID",
        },
        {
          stdVariableID: 2644,
          variableName: "ISSPID",
        },
        {
          stdVariableID: 2649,
          variableName: "ISORRES",
        },
        {
          stdVariableID: 2651,
          variableName: "ISSTRESC",
        },
        {
          stdVariableID: 2652,
          variableName: "ISSTRESN",
        },
        {
          stdVariableID: 2655,
          variableName: "ISREASND",
        },
        {
          stdVariableID: 2656,
          variableName: "ISNAM",
        },
        {
          stdVariableID: 2658,
          variableName: "ISMETHOD",
        },
        {
          stdVariableID: 2660,
          variableName: "ISLLOQ",
        },
        {
          stdVariableID: 2661,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2662,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2663,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2665,
          variableName: "ISDY",
        },
      ],
    },
    {
      domainID: 119,
      targetDomain: "DD",
      targetVariableList: [
        {
          stdVariableID: 2667,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2670,
          variableName: "DDTESTCD",
        },
        {
          stdVariableID: 2671,
          variableName: "DDTEST",
        },
        {
          stdVariableID: 2674,
          variableName: "DDRESCAT",
        },
        {
          stdVariableID: 2675,
          variableName: "DDEVAL",
        },
        {
          stdVariableID: 2676,
          variableName: "DDDTC",
        },
        {
          stdVariableID: 2666,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2668,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2669,
          variableName: "DDSEQ",
        },
        {
          stdVariableID: 2672,
          variableName: "DDORRES",
        },
        {
          stdVariableID: 2673,
          variableName: "DDSTRESC",
        },
        {
          stdVariableID: 2677,
          variableName: "DDDY",
        },
      ],
    },
    {
      domainID: 120,
      targetDomain: "RS",
      targetVariableList: [
        {
          stdVariableID: 2679,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2687,
          variableName: "RSTESTCD",
        },
        {
          stdVariableID: 2688,
          variableName: "RSTEST",
        },
        {
          stdVariableID: 2692,
          variableName: "RSSTAT",
        },
        {
          stdVariableID: 2695,
          variableName: "RSEVAL",
        },
        {
          stdVariableID: 2696,
          variableName: "RSEVALID",
        },
        {
          stdVariableID: 2697,
          variableName: "RSACPTFL",
        },
        {
          stdVariableID: 2702,
          variableName: "RSDTC",
        },
        {
          stdVariableID: 2678,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2680,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2681,
          variableName: "RSSEQ",
        },
        {
          stdVariableID: 2682,
          variableName: "RSGRPID",
        },
        {
          stdVariableID: 2683,
          variableName: "RSREFID",
        },
        {
          stdVariableID: 2684,
          variableName: "RSSPID",
        },
        {
          stdVariableID: 2685,
          variableName: "RSLNKID",
        },
        {
          stdVariableID: 2686,
          variableName: "RSLNKGRP",
        },
        {
          stdVariableID: 2689,
          variableName: "RSCAT",
        },
        {
          stdVariableID: 2690,
          variableName: "RSORRES",
        },
        {
          stdVariableID: 2691,
          variableName: "RSSTRESC",
        },
        {
          stdVariableID: 2693,
          variableName: "RSREASND",
        },
        {
          stdVariableID: 2694,
          variableName: "RSNAM",
        },
        {
          stdVariableID: 2698,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2699,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2700,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2701,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2703,
          variableName: "RSDY",
        },
      ],
    },
    {
      domainID: 121,
      targetDomain: "TU",
      targetVariableList: [
        {
          stdVariableID: 2705,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2712,
          variableName: "TUTESTCD",
        },
        {
          stdVariableID: 2713,
          variableName: "TUTEST",
        },
        {
          stdVariableID: 2715,
          variableName: "TUSTRESC",
        },
        {
          stdVariableID: 2717,
          variableName: "TULOC",
        },
        {
          stdVariableID: 2718,
          variableName: "TULAT",
        },
        {
          stdVariableID: 2719,
          variableName: "TUDIR",
        },
        {
          stdVariableID: 2720,
          variableName: "TUPORTOT",
        },
        {
          stdVariableID: 2721,
          variableName: "TUMETHOD",
        },
        {
          stdVariableID: 2722,
          variableName: "TUEVAL",
        },
        {
          stdVariableID: 2723,
          variableName: "TUEVALID",
        },
        {
          stdVariableID: 2724,
          variableName: "TUACPTFL",
        },
        {
          stdVariableID: 2729,
          variableName: "TUDTC",
        },
        {
          stdVariableID: 2704,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2706,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2707,
          variableName: "TUSEQ",
        },
        {
          stdVariableID: 2708,
          variableName: "TUGRPID",
        },
        {
          stdVariableID: 2709,
          variableName: "TUREFID",
        },
        {
          stdVariableID: 2710,
          variableName: "TUSPID",
        },
        {
          stdVariableID: 2711,
          variableName: "TULNKID",
        },
        {
          stdVariableID: 2714,
          variableName: "TUORRES",
        },
        {
          stdVariableID: 2716,
          variableName: "TUNAM",
        },
        {
          stdVariableID: 2725,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2726,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2727,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2728,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2730,
          variableName: "TUDY",
        },
      ],
    },
    {
      domainID: 122,
      targetDomain: "TR",
      targetVariableList: [
        {
          stdVariableID: 2732,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2740,
          variableName: "TRTESTCD",
        },
        {
          stdVariableID: 2741,
          variableName: "TRTEST",
        },
        {
          stdVariableID: 2743,
          variableName: "TRORRESU",
        },
        {
          stdVariableID: 2746,
          variableName: "TRSTRESU",
        },
        {
          stdVariableID: 2747,
          variableName: "TRSTAT",
        },
        {
          stdVariableID: 2750,
          variableName: "TRMETHOD",
        },
        {
          stdVariableID: 2751,
          variableName: "TREVAL",
        },
        {
          stdVariableID: 2752,
          variableName: "TREVALID",
        },
        {
          stdVariableID: 2753,
          variableName: "TRACPTFL",
        },
        {
          stdVariableID: 2758,
          variableName: "TRDTC",
        },
        {
          stdVariableID: 2731,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2733,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2734,
          variableName: "TRSEQ",
        },
        {
          stdVariableID: 2735,
          variableName: "TRGRPID",
        },
        {
          stdVariableID: 2736,
          variableName: "TRREFID",
        },
        {
          stdVariableID: 2737,
          variableName: "TRSPID",
        },
        {
          stdVariableID: 2738,
          variableName: "TRLNKID",
        },
        {
          stdVariableID: 2739,
          variableName: "TRLNKGRP",
        },
        {
          stdVariableID: 2742,
          variableName: "TRORRES",
        },
        {
          stdVariableID: 2744,
          variableName: "TRSTRESC",
        },
        {
          stdVariableID: 2745,
          variableName: "TRSTRESN",
        },
        {
          stdVariableID: 2748,
          variableName: "TRREASND",
        },
        {
          stdVariableID: 2749,
          variableName: "TRNAM",
        },
        {
          stdVariableID: 2754,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2755,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2756,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2757,
          variableName: "EPOCH",
        },
        {
          stdVariableID: 2759,
          variableName: "TRDY",
        },
      ],
    },
    {
      domainID: 123,
      targetDomain: "PP",
      targetVariableList: [
        {
          stdVariableID: 2761,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2765,
          variableName: "PPTESTCD",
        },
        {
          stdVariableID: 2766,
          variableName: "PPTEST",
        },
        {
          stdVariableID: 2767,
          variableName: "PPCAT",
        },
        {
          stdVariableID: 2768,
          variableName: "PPSCAT",
        },
        {
          stdVariableID: 2770,
          variableName: "PPORRESU",
        },
        {
          stdVariableID: 2773,
          variableName: "PPSTRESU",
        },
        {
          stdVariableID: 2774,
          variableName: "PPSTAT",
        },
        {
          stdVariableID: 2776,
          variableName: "PPSPEC",
        },
        {
          stdVariableID: 2777,
          variableName: "PPDTC",
        },
        {
          stdVariableID: 2778,
          variableName: "PPRFTDTC",
        },
        {
          stdVariableID: 2779,
          variableName: "PPSTINT",
        },
        {
          stdVariableID: 2780,
          variableName: "PPENINT",
        },
        {
          stdVariableID: 2760,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2762,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2763,
          variableName: "PPSEQ",
        },
        {
          stdVariableID: 2764,
          variableName: "PPGRPID",
        },
        {
          stdVariableID: 2769,
          variableName: "PPORRES",
        },
        {
          stdVariableID: 2771,
          variableName: "PPSTRESC",
        },
        {
          stdVariableID: 2772,
          variableName: "PPSTRESN",
        },
        {
          stdVariableID: 2775,
          variableName: "PPREASND",
        },
      ],
    },
    {
      domainID: 124,
      targetDomain: "PC",
      targetVariableList: [
        {
          stdVariableID: 2782,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2790,
          variableName: "PCCAT",
        },
        {
          stdVariableID: 2791,
          variableName: "PCSCAT",
        },
        {
          stdVariableID: 2793,
          variableName: "PCORRESU",
        },
        {
          stdVariableID: 2796,
          variableName: "PCSTRESU",
        },
        {
          stdVariableID: 2797,
          variableName: "PCSTAT",
        },
        {
          stdVariableID: 2800,
          variableName: "PCSPEC",
        },
        {
          stdVariableID: 2801,
          variableName: "PCSPCCND",
        },
        {
          stdVariableID: 2802,
          variableName: "PCMETHOD",
        },
        {
          stdVariableID: 2803,
          variableName: "PCFAST",
        },
        {
          stdVariableID: 2804,
          variableName: "PCDRVFL",
        },
        {
          stdVariableID: 2810,
          variableName: "PCDTC",
        },
        {
          stdVariableID: 2811,
          variableName: "PCENDTC",
        },
        {
          stdVariableID: 2815,
          variableName: "PCELTM",
        },
        {
          stdVariableID: 2817,
          variableName: "PCRFTDTC",
        },
        {
          stdVariableID: 2818,
          variableName: "PCEVLINT",
        },
        {
          stdVariableID: 2781,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2783,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2784,
          variableName: "PCSEQ",
        },
        {
          stdVariableID: 2785,
          variableName: "PCGRPID",
        },
        {
          stdVariableID: 2786,
          variableName: "PCREFID",
        },
        {
          stdVariableID: 2787,
          variableName: "PCSPID",
        },
        {
          stdVariableID: 2788,
          variableName: "PCTESTCD",
        },
        {
          stdVariableID: 2789,
          variableName: "PCTEST",
        },
        {
          stdVariableID: 2792,
          variableName: "PCORRES",
        },
        {
          stdVariableID: 2794,
          variableName: "PCSTRESC",
        },
        {
          stdVariableID: 2795,
          variableName: "PCSTRESN",
        },
        {
          stdVariableID: 2798,
          variableName: "PCREASND",
        },
        {
          stdVariableID: 2799,
          variableName: "PCNAM",
        },
        {
          stdVariableID: 2805,
          variableName: "PCLLOQ",
        },
        {
          stdVariableID: 2806,
          variableName: "PCULOQ",
        },
        {
          stdVariableID: 2807,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2808,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2809,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2812,
          variableName: "PCDY",
        },
        {
          stdVariableID: 2813,
          variableName: "PCTPT",
        },
        {
          stdVariableID: 2814,
          variableName: "PCTPTNUM",
        },
        {
          stdVariableID: 2816,
          variableName: "PCTPTREF",
        },
      ],
    },
    {
      domainID: 125,
      targetDomain: "MS",
      targetVariableList: [
        {
          stdVariableID: 2820,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2826,
          variableName: "MSTESTCD",
        },
        {
          stdVariableID: 2827,
          variableName: "MSTEST",
        },
        {
          stdVariableID: 2828,
          variableName: "MSCAT",
        },
        {
          stdVariableID: 2829,
          variableName: "MSSCAT",
        },
        {
          stdVariableID: 2831,
          variableName: "MSORRESU",
        },
        {
          stdVariableID: 2834,
          variableName: "MSSTRESU",
        },
        {
          stdVariableID: 2835,
          variableName: "MSRESCAT",
        },
        {
          stdVariableID: 2836,
          variableName: "MSSTAT",
        },
        {
          stdVariableID: 2839,
          variableName: "MSLOINC",
        },
        {
          stdVariableID: 2840,
          variableName: "MSMETHOD",
        },
        {
          stdVariableID: 2841,
          variableName: "MSBLFL",
        },
        {
          stdVariableID: 2842,
          variableName: "MSDRVFL",
        },
        {
          stdVariableID: 2846,
          variableName: "MSDTC",
        },
        {
          stdVariableID: 2850,
          variableName: "MSELTM",
        },
        {
          stdVariableID: 2819,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2821,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2822,
          variableName: "MSSEQ",
        },
        {
          stdVariableID: 2823,
          variableName: "MSGRPID",
        },
        {
          stdVariableID: 2824,
          variableName: "MSREFID",
        },
        {
          stdVariableID: 2825,
          variableName: "MSSPID",
        },
        {
          stdVariableID: 2830,
          variableName: "MSORRES",
        },
        {
          stdVariableID: 2832,
          variableName: "MSSTRESC",
        },
        {
          stdVariableID: 2833,
          variableName: "MSSTRESN",
        },
        {
          stdVariableID: 2837,
          variableName: "MSREASND",
        },
        {
          stdVariableID: 2838,
          variableName: "MSNAM",
        },
        {
          stdVariableID: 2843,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2844,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2845,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2847,
          variableName: "MSDY",
        },
        {
          stdVariableID: 2848,
          variableName: "MSTPT",
        },
        {
          stdVariableID: 2849,
          variableName: "MSTPTNUM",
        },
        {
          stdVariableID: 2851,
          variableName: "MSTPTREF",
        },
      ],
    },
    {
      domainID: 126,
      targetDomain: "MB",
      targetVariableList: [
        {
          stdVariableID: 2853,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2859,
          variableName: "MBTESTCD",
        },
        {
          stdVariableID: 2860,
          variableName: "MBTEST",
        },
        {
          stdVariableID: 2861,
          variableName: "MBCAT",
        },
        {
          stdVariableID: 2862,
          variableName: "MBSCAT",
        },
        {
          stdVariableID: 2864,
          variableName: "MBORRESU",
        },
        {
          stdVariableID: 2867,
          variableName: "MBSTRESU",
        },
        {
          stdVariableID: 2868,
          variableName: "MBRESCAT",
        },
        {
          stdVariableID: 2869,
          variableName: "MBSTAT",
        },
        {
          stdVariableID: 2872,
          variableName: "MBLOINC",
        },
        {
          stdVariableID: 2873,
          variableName: "MBSPEC",
        },
        {
          stdVariableID: 2874,
          variableName: "MBSPCCND",
        },
        {
          stdVariableID: 2875,
          variableName: "MBLOC",
        },
        {
          stdVariableID: 2876,
          variableName: "MBMETHOD",
        },
        {
          stdVariableID: 2877,
          variableName: "MBBLFL",
        },
        {
          stdVariableID: 2878,
          variableName: "MBDRVFL",
        },
        {
          stdVariableID: 2882,
          variableName: "MBDTC",
        },
        {
          stdVariableID: 2886,
          variableName: "MBELTM",
        },
        {
          stdVariableID: 2888,
          variableName: "MBRFTDTC",
        },
        {
          stdVariableID: 2852,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2854,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2855,
          variableName: "MBSEQ",
        },
        {
          stdVariableID: 2856,
          variableName: "MBGRPID",
        },
        {
          stdVariableID: 2857,
          variableName: "MBREFID",
        },
        {
          stdVariableID: 2858,
          variableName: "MBSPID",
        },
        {
          stdVariableID: 2863,
          variableName: "MBORRES",
        },
        {
          stdVariableID: 2865,
          variableName: "MBSTRESC",
        },
        {
          stdVariableID: 2866,
          variableName: "MBSTRESN",
        },
        {
          stdVariableID: 2870,
          variableName: "MBREASND",
        },
        {
          stdVariableID: 2871,
          variableName: "MBNAM",
        },
        {
          stdVariableID: 2879,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2880,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2881,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2883,
          variableName: "MBDY",
        },
        {
          stdVariableID: 2884,
          variableName: "MBTPT",
        },
        {
          stdVariableID: 2885,
          variableName: "MBTPTNUM",
        },
        {
          stdVariableID: 2887,
          variableName: "MBTPTREF",
        },
      ],
    },
    {
      domainID: 127,
      targetDomain: "DA",
      targetVariableList: [
        {
          stdVariableID: 2890,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2896,
          variableName: "DATESTCD",
        },
        {
          stdVariableID: 2897,
          variableName: "DATEST",
        },
        {
          stdVariableID: 2898,
          variableName: "DACAT",
        },
        {
          stdVariableID: 2899,
          variableName: "DASCAT",
        },
        {
          stdVariableID: 2901,
          variableName: "DAORRESU",
        },
        {
          stdVariableID: 2904,
          variableName: "DASTRESU",
        },
        {
          stdVariableID: 2905,
          variableName: "DASTAT",
        },
        {
          stdVariableID: 2910,
          variableName: "DADTC",
        },
        {
          stdVariableID: 2889,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2891,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2892,
          variableName: "DASEQ",
        },
        {
          stdVariableID: 2893,
          variableName: "DAGRPID",
        },
        {
          stdVariableID: 2894,
          variableName: "DAREFID",
        },
        {
          stdVariableID: 2895,
          variableName: "DASPID",
        },
        {
          stdVariableID: 2900,
          variableName: "DAORRES",
        },
        {
          stdVariableID: 2902,
          variableName: "DASTRESC",
        },
        {
          stdVariableID: 2903,
          variableName: "DASTRESN",
        },
        {
          stdVariableID: 2906,
          variableName: "DAREASND",
        },
        {
          stdVariableID: 2907,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2908,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2909,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2911,
          variableName: "DADY",
        },
      ],
    },
    {
      domainID: 128,
      targetDomain: "VS",
      targetVariableList: [
        {
          stdVariableID: 2913,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2918,
          variableName: "VSTESTCD",
        },
        {
          stdVariableID: 2919,
          variableName: "VSTEST",
        },
        {
          stdVariableID: 2920,
          variableName: "VSCAT",
        },
        {
          stdVariableID: 2921,
          variableName: "VSSCAT",
        },
        {
          stdVariableID: 2922,
          variableName: "VSPOS",
        },
        {
          stdVariableID: 2924,
          variableName: "VSORRESU",
        },
        {
          stdVariableID: 2927,
          variableName: "VSSTRESU",
        },
        {
          stdVariableID: 2928,
          variableName: "VSSTAT",
        },
        {
          stdVariableID: 2930,
          variableName: "VSLOC",
        },
        {
          stdVariableID: 2931,
          variableName: "VSLAT",
        },
        {
          stdVariableID: 2932,
          variableName: "VSBLFL",
        },
        {
          stdVariableID: 2933,
          variableName: "VSDRVFL",
        },
        {
          stdVariableID: 2937,
          variableName: "VSDTC",
        },
        {
          stdVariableID: 2941,
          variableName: "VSELTM",
        },
        {
          stdVariableID: 2943,
          variableName: "VSRFTDTC",
        },
        {
          stdVariableID: 2912,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2914,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2915,
          variableName: "VSSEQ",
        },
        {
          stdVariableID: 2916,
          variableName: "VSGRPID",
        },
        {
          stdVariableID: 2917,
          variableName: "VSSPID",
        },
        {
          stdVariableID: 2923,
          variableName: "VSORRES",
        },
        {
          stdVariableID: 2925,
          variableName: "VSSTRESC",
        },
        {
          stdVariableID: 2926,
          variableName: "VSSTRESN",
        },
        {
          stdVariableID: 2929,
          variableName: "VSREASND",
        },
        {
          stdVariableID: 2934,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2935,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2936,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2938,
          variableName: "VSDY",
        },
        {
          stdVariableID: 2939,
          variableName: "VSTPT",
        },
        {
          stdVariableID: 2940,
          variableName: "VSTPTNUM",
        },
        {
          stdVariableID: 2942,
          variableName: "VSTPTREF",
        },
      ],
    },
    {
      domainID: 129,
      targetDomain: "SC",
      targetVariableList: [
        {
          stdVariableID: 2945,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2950,
          variableName: "SCTESTCD",
        },
        {
          stdVariableID: 2951,
          variableName: "SCTEST",
        },
        {
          stdVariableID: 2952,
          variableName: "SCCAT",
        },
        {
          stdVariableID: 2953,
          variableName: "SCSCAT",
        },
        {
          stdVariableID: 2955,
          variableName: "SCORRESU",
        },
        {
          stdVariableID: 2958,
          variableName: "SCSTRESU",
        },
        {
          stdVariableID: 2959,
          variableName: "SCSTAT",
        },
        {
          stdVariableID: 2961,
          variableName: "SCDTC",
        },
        {
          stdVariableID: 2944,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2946,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2947,
          variableName: "SCSEQ",
        },
        {
          stdVariableID: 2948,
          variableName: "SCGRPID",
        },
        {
          stdVariableID: 2949,
          variableName: "SCSPID",
        },
        {
          stdVariableID: 2954,
          variableName: "SCORRES",
        },
        {
          stdVariableID: 2956,
          variableName: "SCSTRESC",
        },
        {
          stdVariableID: 2957,
          variableName: "SCSTRESN",
        },
        {
          stdVariableID: 2960,
          variableName: "SCREASND",
        },
        {
          stdVariableID: 2962,
          variableName: "SCDY",
        },
      ],
    },
    {
      domainID: 130,
      targetDomain: "QS",
      targetVariableList: [
        {
          stdVariableID: 2964,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 2969,
          variableName: "QSTESTCD",
        },
        {
          stdVariableID: 2970,
          variableName: "QSTEST",
        },
        {
          stdVariableID: 2971,
          variableName: "QSCAT",
        },
        {
          stdVariableID: 2972,
          variableName: "QSSCAT",
        },
        {
          stdVariableID: 2974,
          variableName: "QSORRESU",
        },
        {
          stdVariableID: 2977,
          variableName: "QSSTRESU",
        },
        {
          stdVariableID: 2978,
          variableName: "QSSTAT",
        },
        {
          stdVariableID: 2980,
          variableName: "QSBLFL",
        },
        {
          stdVariableID: 2981,
          variableName: "QSDRVFL",
        },
        {
          stdVariableID: 2982,
          variableName: "QSEVAL",
        },
        {
          stdVariableID: 2986,
          variableName: "QSDTC",
        },
        {
          stdVariableID: 2990,
          variableName: "QSELTM",
        },
        {
          stdVariableID: 2992,
          variableName: "QSRFTDTC",
        },
        {
          stdVariableID: 2993,
          variableName: "QSEVLINT",
        },
        {
          stdVariableID: 2963,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2965,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2966,
          variableName: "QSSEQ",
        },
        {
          stdVariableID: 2967,
          variableName: "QSGRPID",
        },
        {
          stdVariableID: 2968,
          variableName: "QSSPID",
        },
        {
          stdVariableID: 2973,
          variableName: "QSORRES",
        },
        {
          stdVariableID: 2975,
          variableName: "QSSTRESC",
        },
        {
          stdVariableID: 2976,
          variableName: "QSSTRESN",
        },
        {
          stdVariableID: 2979,
          variableName: "QSREASND",
        },
        {
          stdVariableID: 2983,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 2984,
          variableName: "VISIT",
        },
        {
          stdVariableID: 2985,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 2987,
          variableName: "QSDY",
        },
        {
          stdVariableID: 2988,
          variableName: "QSTPT",
        },
        {
          stdVariableID: 2989,
          variableName: "QSTPTNUM",
        },
        {
          stdVariableID: 2991,
          variableName: "QSTPTREF",
        },
      ],
    },
    {
      domainID: 131,
      targetDomain: "PE",
      targetVariableList: [
        {
          stdVariableID: 2995,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 3000,
          variableName: "PETESTCD",
        },
        {
          stdVariableID: 3001,
          variableName: "PETEST",
        },
        {
          stdVariableID: 3003,
          variableName: "PECAT",
        },
        {
          stdVariableID: 3004,
          variableName: "PESCAT",
        },
        {
          stdVariableID: 3007,
          variableName: "PEORRESU",
        },
        {
          stdVariableID: 3009,
          variableName: "PESTAT",
        },
        {
          stdVariableID: 3011,
          variableName: "PELOC",
        },
        {
          stdVariableID: 3012,
          variableName: "PEMETHOD",
        },
        {
          stdVariableID: 3013,
          variableName: "PEEVAL",
        },
        {
          stdVariableID: 3017,
          variableName: "PEDTC",
        },
        {
          stdVariableID: 2994,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 2996,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 2997,
          variableName: "PESEQ",
        },
        {
          stdVariableID: 2998,
          variableName: "PEGRPID",
        },
        {
          stdVariableID: 2999,
          variableName: "PESPID",
        },
        {
          stdVariableID: 3002,
          variableName: "PEMODIFY",
        },
        {
          stdVariableID: 3005,
          variableName: "PEBODSYS",
        },
        {
          stdVariableID: 3006,
          variableName: "PEORRES",
        },
        {
          stdVariableID: 3008,
          variableName: "PESTRESC",
        },
        {
          stdVariableID: 3010,
          variableName: "PEREASND",
        },
        {
          stdVariableID: 3014,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 3015,
          variableName: "VISIT",
        },
        {
          stdVariableID: 3016,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 3018,
          variableName: "PEDY",
        },
      ],
    },
    {
      domainID: 132,
      targetDomain: "LB",
      targetVariableList: [
        {
          stdVariableID: 3020,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 3026,
          variableName: "LBTESTCD",
        },
        {
          stdVariableID: 3027,
          variableName: "LBTEST",
        },
        {
          stdVariableID: 3028,
          variableName: "LBCAT",
        },
        {
          stdVariableID: 3029,
          variableName: "LBSCAT",
        },
        {
          stdVariableID: 3031,
          variableName: "LBORRESU",
        },
        {
          stdVariableID: 3034,
          variableName: "LBSTRESC",
        },
        {
          stdVariableID: 3036,
          variableName: "LBSTRESU",
        },
        {
          stdVariableID: 3040,
          variableName: "LBNRIND",
        },
        {
          stdVariableID: 3041,
          variableName: "LBSTAT",
        },
        {
          stdVariableID: 3044,
          variableName: "LBLOINC",
        },
        {
          stdVariableID: 3045,
          variableName: "LBSPEC",
        },
        {
          stdVariableID: 3046,
          variableName: "LBSPCCND",
        },
        {
          stdVariableID: 3047,
          variableName: "LBMETHOD",
        },
        {
          stdVariableID: 3048,
          variableName: "LBBLFL",
        },
        {
          stdVariableID: 3049,
          variableName: "LBFAST",
        },
        {
          stdVariableID: 3050,
          variableName: "LBDRVFL",
        },
        {
          stdVariableID: 3051,
          variableName: "LBTOX",
        },
        {
          stdVariableID: 3052,
          variableName: "LBTOXGR",
        },
        {
          stdVariableID: 3056,
          variableName: "LBDTC",
        },
        {
          stdVariableID: 3057,
          variableName: "LBENDTC",
        },
        {
          stdVariableID: 3061,
          variableName: "LBELTM",
        },
        {
          stdVariableID: 3063,
          variableName: "LBRFTDTC",
        },
        {
          stdVariableID: 3019,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3021,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3022,
          variableName: "LBSEQ",
        },
        {
          stdVariableID: 3023,
          variableName: "LBGRPID",
        },
        {
          stdVariableID: 3024,
          variableName: "LBREFID",
        },
        {
          stdVariableID: 3025,
          variableName: "LBSPID",
        },
        {
          stdVariableID: 3030,
          variableName: "LBORRES",
        },
        {
          stdVariableID: 3032,
          variableName: "LBORNRLO",
        },
        {
          stdVariableID: 3033,
          variableName: "LBORNRHI",
        },
        {
          stdVariableID: 3035,
          variableName: "LBSTRESN",
        },
        {
          stdVariableID: 3037,
          variableName: "LBSTNRLO",
        },
        {
          stdVariableID: 3038,
          variableName: "LBSTNRHI",
        },
        {
          stdVariableID: 3039,
          variableName: "LBSTNRC",
        },
        {
          stdVariableID: 3042,
          variableName: "LBREASND",
        },
        {
          stdVariableID: 3043,
          variableName: "LBNAM",
        },
        {
          stdVariableID: 3053,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 3054,
          variableName: "VISIT",
        },
        {
          stdVariableID: 3055,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 3058,
          variableName: "LBDY",
        },
        {
          stdVariableID: 3059,
          variableName: "LBTPT",
        },
        {
          stdVariableID: 3060,
          variableName: "LBTPTNUM",
        },
        {
          stdVariableID: 3062,
          variableName: "LBTPTREF",
        },
      ],
    },
    {
      domainID: 133,
      targetDomain: "IE",
      targetVariableList: [
        {
          stdVariableID: 3065,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 3069,
          variableName: "IETESTCD",
        },
        {
          stdVariableID: 3071,
          variableName: "IECAT",
        },
        {
          stdVariableID: 3072,
          variableName: "IESCAT",
        },
        {
          stdVariableID: 3073,
          variableName: "IEORRES",
        },
        {
          stdVariableID: 3074,
          variableName: "IESTRESC",
        },
        {
          stdVariableID: 3078,
          variableName: "IEDTC",
        },
        {
          stdVariableID: 3064,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3066,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3067,
          variableName: "IESEQ",
        },
        {
          stdVariableID: 3068,
          variableName: "IESPID",
        },
        {
          stdVariableID: 3070,
          variableName: "IETEST",
        },
        {
          stdVariableID: 3075,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 3076,
          variableName: "VISIT",
        },
        {
          stdVariableID: 3077,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 3079,
          variableName: "IEDY",
        },
      ],
    },
    {
      domainID: 134,
      targetDomain: "EG",
      targetVariableList: [
        {
          stdVariableID: 3081,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 3087,
          variableName: "EGTESTCD",
        },
        {
          stdVariableID: 3088,
          variableName: "EGTEST",
        },
        {
          stdVariableID: 3089,
          variableName: "EGCAT",
        },
        {
          stdVariableID: 3090,
          variableName: "EGSCAT",
        },
        {
          stdVariableID: 3091,
          variableName: "EGPOS",
        },
        {
          stdVariableID: 3093,
          variableName: "EGORRESU",
        },
        {
          stdVariableID: 3094,
          variableName: "EGSTRESC",
        },
        {
          stdVariableID: 3096,
          variableName: "EGSTRESU",
        },
        {
          stdVariableID: 3097,
          variableName: "EGSTAT",
        },
        {
          stdVariableID: 3101,
          variableName: "EGLEAD",
        },
        {
          stdVariableID: 3102,
          variableName: "EGMETHOD",
        },
        {
          stdVariableID: 3103,
          variableName: "EGBLFL",
        },
        {
          stdVariableID: 3104,
          variableName: "EGDRVFL",
        },
        {
          stdVariableID: 3105,
          variableName: "EGEVAL",
        },
        {
          stdVariableID: 3109,
          variableName: "EGDTC",
        },
        {
          stdVariableID: 3113,
          variableName: "EGELTM",
        },
        {
          stdVariableID: 3115,
          variableName: "EGRFTDTC",
        },
        {
          stdVariableID: 3080,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3082,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3083,
          variableName: "EGSEQ",
        },
        {
          stdVariableID: 3084,
          variableName: "EGGRPID",
        },
        {
          stdVariableID: 3085,
          variableName: "EGREFID",
        },
        {
          stdVariableID: 3086,
          variableName: "EGSPID",
        },
        {
          stdVariableID: 3092,
          variableName: "EGORRES",
        },
        {
          stdVariableID: 3095,
          variableName: "EGSTRESN",
        },
        {
          stdVariableID: 3098,
          variableName: "EGREASND",
        },
        {
          stdVariableID: 3099,
          variableName: "EGFXN",
        },
        {
          stdVariableID: 3100,
          variableName: "EGNAM",
        },
        {
          stdVariableID: 3106,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 3107,
          variableName: "VISIT",
        },
        {
          stdVariableID: 3108,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 3110,
          variableName: "EGDY",
        },
        {
          stdVariableID: 3111,
          variableName: "EGTPT",
        },
        {
          stdVariableID: 3112,
          variableName: "EGTPTNUM",
        },
        {
          stdVariableID: 3114,
          variableName: "EGTPTREF",
        },
      ],
    },
    {
      domainID: 135,
      targetDomain: "FA",
      targetVariableList: [
        {
          stdVariableID: 3117,
          variableName: "DOMAIN",
        },
        {
          stdVariableID: 3122,
          variableName: "FATESTCD",
        },
        {
          stdVariableID: 3123,
          variableName: "FATEST",
        },
        {
          stdVariableID: 3125,
          variableName: "FACAT",
        },
        {
          stdVariableID: 3126,
          variableName: "FASCAT",
        },
        {
          stdVariableID: 3128,
          variableName: "FAORRESU",
        },
        {
          stdVariableID: 3131,
          variableName: "FASTRESU",
        },
        {
          stdVariableID: 3132,
          variableName: "FASTAT",
        },
        {
          stdVariableID: 3134,
          variableName: "FALOC",
        },
        {
          stdVariableID: 3135,
          variableName: "FALAT",
        },
        {
          stdVariableID: 3136,
          variableName: "FABLFL",
        },
        {
          stdVariableID: 3137,
          variableName: "FAEVAL",
        },
        {
          stdVariableID: 3141,
          variableName: "FADTC",
        },
        {
          stdVariableID: 3116,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3118,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3119,
          variableName: "FASEQ",
        },
        {
          stdVariableID: 3120,
          variableName: "FAGRPID",
        },
        {
          stdVariableID: 3121,
          variableName: "FASPID",
        },
        {
          stdVariableID: 3124,
          variableName: "FAOBJ",
        },
        {
          stdVariableID: 3127,
          variableName: "FAORRES",
        },
        {
          stdVariableID: 3129,
          variableName: "FASTRESC",
        },
        {
          stdVariableID: 3130,
          variableName: "FASTRESN",
        },
        {
          stdVariableID: 3133,
          variableName: "FAREASND",
        },
        {
          stdVariableID: 3138,
          variableName: "VISITNUM",
        },
        {
          stdVariableID: 3139,
          variableName: "VISIT",
        },
        {
          stdVariableID: 3140,
          variableName: "VISITDY",
        },
        {
          stdVariableID: 3142,
          variableName: "FADY",
        },
      ],
    },
    {
      domainID: 136,
      targetDomain: "SUPP",
      targetVariableList: [
        {
          stdVariableID: 3144,
          variableName: "RDOMAIN",
        },
        {
          stdVariableID: 3146,
          variableName: "IDVAR",
        },
        {
          stdVariableID: 3148,
          variableName: "QNAM",
        },
        {
          stdVariableID: 3152,
          variableName: "QEVAL",
        },
        {
          stdVariableID: 3143,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3145,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3147,
          variableName: "IDVARVAL",
        },
        {
          stdVariableID: 3149,
          variableName: "QLABEL",
        },
        {
          stdVariableID: 3150,
          variableName: "QVAL",
        },
        {
          stdVariableID: 3151,
          variableName: "QORIG",
        },
      ],
    },
    {
      domainID: 137,
      targetDomain: "RELREC",
      targetVariableList: [
        {
          stdVariableID: 3154,
          variableName: "RDOMAIN",
        },
        {
          stdVariableID: 3156,
          variableName: "IDVAR",
        },
        {
          stdVariableID: 3158,
          variableName: "RELTYPE",
        },
        {
          stdVariableID: 3153,
          variableName: "STUDYID",
        },
        {
          stdVariableID: 3155,
          variableName: "USUBJID",
        },
        {
          stdVariableID: 3157,
          variableName: "IDVARVAL",
        },
        {
          stdVariableID: 3159,
          variableName: "RELID",
        },
      ],
    },
  ]);
  const [vari, setVeri] = useState([]);

  let demo = ["A1", "A2", "A3"];

  let filterData = data.map((d) => {
    let tarDomain = {};
    tarDomain["domainID"] = d.domainID;
    tarDomain["targetDomain"] = d.targetDomain;
    return tarDomain;
  });

  let tarVar = [];

  for (let i = 0; i < data.length; i++) {
    let temp = {};

    let tarV = data[i].targetVariableList;
    for (let j = 0; j < tarV.length; j++) {
      temp["domainID"] = data[i].domainID;
      temp["targetDomain"] = data[i].targetDomain;
      temp["stdVariableID"] = tarV[j].stdVariableID;
      temp["variableName"] = tarV[j].variableName;
      tarVar.push(temp);
      temp = {};
    }
    
  }
  console.log(tarVar);

  console.log(filterData);

  let filterVar = [];
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "select") {
      setVeri([]);
    } else {
      filterVar = data
        .filter((d) => {
          if (d.targetDomain === e.target.value) {
            return d;
          }
        })[0]
        .targetVariableList.map((v) => v.variableName);
      console.log(filterVar);
      setVeri(filterVar);
    }
  };

  return (
    <>
      <div>CascadedDropdownNew</div>
      <select style={{ width: "50%" }} onChange={onChangeHandler}>
        <option value="select">Select</option>
        {filterData.length > 0 &&
          filterData.map((d) => {
            return (
              <option key={d.domainID} value={d.targetDomain}>
                {d.targetDomain}
              </option>
            );
          })}
      </select>

      <select style={{ width: "50%" }}>
        <option>Select</option>
        {vari.length > 0 &&
          vari.map((v) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default CascadedDropdownNew;
