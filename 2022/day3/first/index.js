const input = [
    "RCMRQjLLWGTjnlnZwwnZJRZH",
    "qnvfhpSbvSppNddNdSqbbmmdPrwttJVrVPDVrJtHtwPZhrPJ",
    "BFpFzSSqSFFSvQsnWgCMjTLzng",
    "DbWVcVRRdlLffvtqjTWNgQ",
    "mJJMpsmrMrJSHJpsHrFHvBvgHvqfNvzffgTvfj",
    "mMhPjmjmFPJhMSGGcDRlwRdcLGPc",
    "qFcbmWFJqqWpRJcQWpqsQQQwSPCPrHRHCPdNZtSrSHwrNZ",
    "jGMjGLhhhgTvghgtGVjnNCrPVwZSZffSNSwHZZdH",
    "DvzDlvvhnjlMlglglGGhDLpqqcJWWtsmszpWbBBBmQmb",
    "SPLPHQbJSbPsvTLmfDvVDctvWhcDlD",
    "jdRRzzGgJqwrpMRMgdjlcVcWqfWWlfDlmmlWhB",
    "rwgRGdpGprNNLQLsbZJPsn",
    "GZhTVLztHrSzrRBz",
    "MJWjMvsfSCLSnrJn",
    "MjglcgWMdccvZGFtTDchLLLh",
    "rgDHBgBjRgRTgwzwthBnQwmBtB",
    "MsMpSfMsTGTFFLdFFFMFsnNmthNnzhthtwmWnznz",
    "pZMpJdvJMGRHVJJTVHjb",
    "TQVqZVBcBBdBfbpN",
    "zvzrtCshrntCHslPMMMFpZHbNSpb",
    "hLWhGLttsvLvrrWvhzVmQgwJZTRcggTjGcgT",
    "SqRGLHtSbtNTbhjFTjDDpF",
    "WwgJgmdmMdwPDVQQBBhSBFwV",
    "JMPlmlSldWZmRqtLsRGRtvls",
    "mZvmvPNmlNJPJzzmgNvNgdqqdBSpfHBqSsHqHfwpsffq",
    "nhDQDrwLrVVnqfGnsBGBGGsH",
    "VjCDMhbDjLjtFhtLhLhQjNZcZPwWWcczmvglgJJN",
    "wwqnwZGGZqqMpMprpZqwGlLDtNDffdBdNVBmNGBN",
    "TSTchTFbRLfLmVhNDm",
    "SCLRvJQvRFTSRjqMqPZrZnrzZzjp",
    "cJfqGjgGJcsgsPnghgBm",
    "FHHbQQHLWLbPQThqQQRnZs",
    "lLLMSCvrlFMwlSlFcNwqDVVpJcfjzVDf",
    "cRdRDhsDFzPztwJdGP",
    "CVqpCqCgSNfCSQBpjtBwtlBBHLlmGjGG",
    "qfQfCVQfgQnVNpQCMqfcrFrwWDhrDnsvcRDsbc",
    "nFWWzqWZQSqnJzNJzslJVsdV",
    "vBBvsLvbBmBmRlGTNJJvRRTD",
    "tBbpmmPwCmHpMHHMrPCCcSnZSgcFcZgWFscSfgth",
    "LLssTJrqrpvrvvpJvdjggMlgzVgVggPlFPqz",
    "HwZwCZfHNtbMzjgVnFPC",
    "RSttfRwZDtBcZwQMQdrQsdTBQQmW",
    "lJnNhMJqljlNhSrdWlGGGQHwwH",
    "vbTpbCsTFCTmbSmcRfVCfRpwcPdwWQQrdwHwBHrPdwrLLB",
    "sVTmDfmCTVmJjgSzzntDtt",
    "DQtMjZHZHvMbwwTSpqLtpJ",
    "FzVFlsNdVczWPzWcslVfSLqLsqJpSwwsJswLrf",
    "dNFFWcmzWFGLWcdcFgvZvvRHQvjMHDMBGD",
    "MVPTmPvbMgrTmmmmMRMvPvBwFGhhDCdFFwLCLdJhDGFRhG",
    "fqqWfpZWzWsDwhwdhwqGLD",
    "ZWSSftStnnplcQLSbVMBvTbrMlbrBvvl",
    "FSsHDmtFLbbFbLGg",
    "vrvzTzWzzzvppzSzTMnfTggjVgbgjbLjgPPnbGbVGL",
    "pdMwrBpfwfSMTTWdMTpBDCBtmsmltslcBDCshDHs",
    "RgbmfGtmRVgLLSVSnSrWWSHhnh",
    "ccTvlvNppsFnbFnhnWnPHJ",
    "pqNjDBjNNjvpZfmtjbCLbCmb",
    "qsSVpSVfWqgNrVtWptpmSfqbPQljbHPHlDnljRSlwSnwQn",
    "dcGBrMFMdLTGGdlwDwMRHwwMbjHP",
    "CFBvhFhTLFCGvFchChBdBTJtsNpWqfVgtszprmVWNqNgvV",
    "sjsTgNSNqSjgMmVPmmmrpH",
    "RftCcWddRCZfPtCfcQZdcZDcrBllBFpVHprHWlHHpHJJmlFp",
    "thPZRtLcDRdDCTTsqbnwjhvNjq",
    "TQPtgfgdPcdSQhjwHhHBLS",
    "RrqCqVVbJmVRJmsrzmJpWljlSHLSBwSSRWllWv",
    "CVrDNbHrJHVMCbrDJsdFdFcPFZngMfFdTPfP",
    "NNlZgndqmGVGGVZNWQmWmbhbbhpbbhtCbhtgCpCtMF",
    "THfLPTzwJTJrvHRwwsbFbhfbMCpphVtBbB",
    "RjrvzHLzPDvLzPHrTJVrwPndZQNlDZGndZWDdNNcmlQq",
    "tjDsjDGtTjVVbQVCggvrbg",
    "qrWWRBllRFrdlSMCdbSJCP",
    "cZcncRnhphpZWRNtrmsrGpHffmwH",
    "qpRjdcqTcMbbMRTwtnplnwnhPzhBhw",
    "FSFLvNrsPNrsGSLsrFSGfnwBQwZnZwhQQLwwQhnn",
    "sWNVmVmCFNWGsCrrjRTmMjRjPRqgJqJg",
    "sVCnzVpmFpVSnNFCmnmzwRFDWDdMllDccMdwDMjWjWlWjg",
    "BJbPJGGGHPZqZQbpMlWWMWlBljjjgDjh",
    "tGQPpZtfTPpqrHsVLSzmRNLtSFsN",
    "WCDlBWWlvMFWlQWpmSZdZnNmGfJZFZ",
    "LqjTjgtjPcHTTJgLThztcLTLnHnmdSpZdpdffnmZSppfGpSn",
    "PtzqzjtqJgggzhqqccqhrQMsMvMwrCwMlBvMwvvsvs",
    "NMsJfsHTMVbjnLnVsC",
    "htWllhmZcWDWBwhZPcmpVRjnVMRLCCjLFpCwRb",
    "PmZMrBtcPmZWhzDWBtMmJQdddHfQGNSqHqQGGTgr",
    "NmfnnsPlHnGqnlsNNmRPltRLvrhvrSGJSJjvFFFSSFJLhb",
    "PzQZccVPVwgPjrJSJjhFFpQr",
    "TdwBgdTVwzdwzlmNfRqPmqqTql",
    "BVLLBPmPmWBlMlLJnJlBlFQVgdRDdRZRZHpZjQzdRdZQdzQZ",
    "trGTsfbTTgHZptzSZW",
    "fsfTNcCqqNhhVhVFVhVBWLLB",
    "LJwgJNfbCvwCJCwBCCNhhHmGHWWSMWmWmbMmTmmGdS",
    "lzRnnltsstZzzRTfHtHWHGWftfHW",
    "ZFFzVFqzqlFcZscZpRZsNphjhjvjfgJhQgQvwvhC",
    "HHzcFNcHFjhjZjlrghLL",
    "pMZJptpZWCmpttRMCWnnDnBGGDLhlLQrhl",
    "MJsMCTZTTpTJRmMCJzfNsNcfNHqzvvfcww",
    "ZDtllsDlVsrQBqQqRfWl",
    "wvJgpPhhscgvpJFNrRjRrWRjqrRjdjRv",
    "zpsNzCsNCJCCPPHSLzznMnDSLGLM",
    "rfrJjFWrwjpnJjjjfrjJJnFVTgTggRWRRRPPLQgCgQcPPT",
    "sSNbSvqmsSZDZZBtNTTPGgMLMRVcgPCMRb",
    "zZDZzNNSmrfpjFCjzj",
    "dbbNJPBbbrFqNqttqrGbqDcmDQRmFmwcwSnQSDcpwS",
    "ZMMTsHjzLlLcnSVwpRRQ",
    "hZTWjWvTZzTTWhszfwbJhrgJqtBbJGdqNPqt",
    "rrqgHrgtcHJRRjWZlRvnnWBn",
    "QbhVmdFppwbdjnMvlnBwMWZP",
    "TpFDdVTFTDfhHfJcSJSzGZGf",
    "sqNTNZHsHjjFBBwJMMNMcCJD",
    "WGLQPjfWfQWPWmtLSRRRLwBJDbtCCJJCbbwCMBbMBc",
    "RnPdLQfPLRdndGGRvfjlgdrTTgTsrgTrZFzF",
    "BfHbjVVqSBFfMSlCLCDrGSQssvlr",
    "tTpnnzpcPnwzhcnJTDtTPRprGlRGGGCWlQsWvrlvrQGQrC",
    "DPwhghDTpPVHqqdgZbZq",
    "ZzPqfGPtRtqfqPbqfGgGZbrhMjmjBCpHpHNCmHtHjmBHnj",
    "QJwllvFWwDvnwCBBzjwwpC",
    "ccJLVQzWFJvVJlVbgrZZLZLRRPSgdr",
    "rBGbLbnTfnZrQbTnHldqsMmHsqlsWfMd",
    "JcJjCCPzPtjCNHdlGGMlll",
    "jjgpRRvcGbwpThVppT",
    "ttDfjtqfjtpTWWwfTbtlWccNGRSZNGPGhZGhGhcwRh",
    "LbCrHdvzLSSHmSRNmc",
    "JCsBvrvBLzFQbbvlVVnpQpDtWlDqfq",
    "vvdvJBfvdTvRBflBJPNmmffmgPCMwDgsss",
    "rFjqLnMcnqrrtMLtjNgCPCsNzzgsPCGFNs",
    "VqLqnLVZqjMZqWnrVtWlZJJSvHvBdRSvBdRvvJ",
    "zZBDzgQQZLlcglzjrCrCMFjGZbMsHm",
    "PnnJVRfttTtwVnnVFGHVsjCFCjrsMM",
    "wPRpRpRnNTpPNlBdQQDdgDNMhN",
    "bNQpFpnwgtDHpbnhWtffmfmhvhhfsZ",
    "LcdLdwCLPPSVSqqwZGhWdJhGJZhlGlsm",
    "TBwSLPSPVRSVqSVqVrcnpMDDngMgnQpbRQFDNH",
    "vPSvBJZSSdJgpJJZBDGDGrdqGdllGrGDrh",
    "HMtsltFlRVVFtlscRjjMcsWwWChWmrnwDWGwChmjGCWq",
    "MQHNlTVHNVHpbbpbTvvBvf",
    "VsbPMwhbWhzdpzNNggnBcTBWNngQ",
    "RmtZZFZqSjqVHmGQNcBHNLGLGHQH",
    "JjRClqCjZlDZmqSqljFZZqRCvsvPfshhMdwsDwbVwzMzhffb",
    "bfGtRgfDtVmsMzTbmz",
    "LjGZwQLLdjFdHLNMhmzBzMNHNmzN",
    "wjQLCFvnnQGdZLGWSjdqWDfPlrRpqRDDRqrpPr",
    "pqnBZqjCNCqQqmllpHGMGdTfML",
    "PsFgrRvSPsWTwWWQwGHLHW",
    "SrvgsFbrrPJJFsrFPtFSCChBDQjqCqtNhDqhCqNC",
    "RJZRWZWMWZPZffRCPWMdRdfQQQjJzHQsssjrSQFVschVHr",
    "NgpnDgvGTNTVFHFFjVFF",
    "jntvgljpGvlnbLtLbBvnLRPlCCwwCfRqMCCqqqddqw",
    "PFBMVDSVPHMTThtMtSBMMVNbQprHbNRgNRRgLnvpnjnN",
    "scGcrcwlswdGlcqvbQgnnpQnqLjnpp",
    "ffwswWzcmlcWWsmcZhrDFrZMFZBMFzhM",
    "LMdZGqdRSSZmCZMRfQjnggvlvggRcznz",
    "tjjFhBrtpthpslcvvlcQzFnFvQ",
    "jrhbjtpJtbZqCLdWLq",
    "HBGBfBttZzbGbljPdpFddFqRmqRzRN",
    "JDWghDDSDqmmDDpc",
    "CLvgMvChCvLphCTSShhMhQsBbfTfsGsrBfjfrljrZZff",
    "RgHgDqDzqQqgcdHqcZGTNlGffGBDGZBTGZ",
    "LFLPWsmvrbwhwwswrTlTTCBNGFfGlNJZNS",
    "vhrLnvhNmWvMsrvwqMdRcptQtztcjptz",
    "sLMLsThhjgqLlsnsLgTLtMFcRbcPcJSwJbbSbtSWScSt",
    "fvrjjDjvNprdPwwJCCSrWPFP",
    "vfZdGzVzfvGGVGpBjnnMglTsgZlqsMlM",
    "TCVMfCfBnHHfLLPFWb",
    "GgQlGJzNzbzHcHHLlcPLHL",
    "tQbNQGgRZZCVtVMZ",
    "QFFMzwjwngsvsBjGGJWbBbBWbB",
    "QdmVDmVDWRPWVPVV",
    "QHtHSdDpLQCCSHrtqrdrttDfLgvnFvFghNszzwgngFwsNF",
    "RzzTNpSRBzSBVpSRlHNSHBSSGPcLNGtjhPPcbcGhPPhcrnct",
    "CCmmCwwdfFJqDmdwsddhsmvdcMbLfcftttbPnjMPbcjPMPbP",
    "mdZQmvssFdqsFZvsZQmvDvmWzgQBWTRzTzHlppWRglHBQh",
    "VWmnfQWzWWnHWMfmmMVNMfWjtBtBNSNSrlStlpjJBBlgBS",
    "cZZvbwsZsbbZvvscCRdFTTTQrBStdBJgSdhjgBjBjJjpJJ",
    "wCFTCbZbFwwCTvFTwsPGccMzMDWVWfzLGmqHnnDHGLQL",
    "sNQQHbbhdlpdrQllqpsqSpGjZDZGgDnVcnjjnnDZ",
    "WWRLGFvJBJPvzzWjnTncDVZTTPgDff",
    "FLRLGRFRJLBWJmJzMRLCvldrMrbbltdhQQlNqtMbsb",
    "HZllwlZSlSZwhvmQjcZhTqcT",
    "sPzzdgpszpzsBdvvMccvcqPThjhM",
    "JDdsDspLzsdzBgVdBGBzCLlwbbwWSnlnnWffHwJcNlHw",
    "nzCTCnpqJqfCnvvjZjWjPcZrmcmZfW",
    "GNdwgVjwRdRglMrPWLPWZWcNWW",
    "dVblgtRwQgSGVBldbQBbBRJnQJTsJHTqnzzJFpjvHnnn",
    "dqpQQrdqQpLfqcGSdggQdgRMmwHBMMBVNRNDFFBDBgNt",
    "vTzsnZCnlCnshbPlvZJbBzVmmVRDNwtHFBwMDVBR",
    "lJCshjTJbVqfVdjjjG",
    "WlLCJlHLcZcJWcWZJnLHnPqlFtSthTnFNThVtNhVhvNVzVtF",
    "QfbgRsspfDRsgfjqqRRpDbSNSTFzBbTbhttVBhVNBzzT",
    "fwgfRdpdfQDqgPHHZJZCcdGddH",
    "sbrbmVmfddzJntZZtwtMMf",
    "PvhwPRlvvWhFvSRhpFMMJGMFppnBTBGJ",
    "RPlCCLDPDClwHbrdzsdNLzgs",
    "HZgqtgbqRZvzwzCh",
    "BFqmGfrNLQfhzJWBhRJwJR",
    "LFqFQjrcrcqFNMmMdHggntDPMnsDbn",
    "NmWmPblGnnTTNlFGPmNWfwdchdlHdBdwcfCfZppZ",
    "rzqzRjgVrJrzzcFdqdCBFBhZhH",
    "VDRsRMjRJJrQsJPTGFNvsbnsnLGm",
    "nrbrBLTffjNRzGQSJHJQGT",
    "tcZqMcppCmHRQPGGCG",
    "pMDcZhpgcpFDfrwNDDrLVjGj",
    "LWlmlmWqvrBMWWBlmjLThBrfPJZfZZCwPCJJwPCTcggCsd",
    "pSbRHbzpHDVFRQRfPdfnZswgcJcppp",
    "SzRNGbzSWNPLWqLv",
    "vqslblpspsvqBFSqcrrZZDdTfFPHccrf",
    "GWRhWmjwhRcQdCDrPjDP",
    "mcWLVnnWJgGRzVSsVSpSSptNpMvb",
    "wHTPfdTvHlPHGpdvvTddGfcJLLWWwWWcCWrqrVMWCVLL",
    "zhsSNZhnshNSnvZmvsCWWSLrVMcrSCLWJcrq",
    "snDnshmNsjnTdHPfDGvdDT",
    "CfrnFFMnnsRNrNCwFCrdssgqgqvVZvZqlTWBNWZqlJBW",
    "htDhDLhwPWWBqTghgB",
    "DPLPzHDtSPStjLGLtzSMwbdMdnCHrRdCFsmfnR",
    "nBNWCvJmVPNnCPNDJWbtmSwqTttcQsSqtqTjQQ",
    "pMflzLlffRRMRdFlflpLddGdsTjwHqzcvwTqtsStQQjtwwsQ",
    "ZhGlphlpvvLLfFGvMLhfrfWNJNNPVPbnPhnDgDbDDNbJ",
    "ZCpCmVlZvlpBBwvvMCrJhrfhMfjjWMSG",
    "qhstFzFFqzHGzNfSMJSGzM",
    "QnHRPRgRQPtPhtnDsqsbDQPBlTcpBwmVmTvbwdwBTVZVpl",
    "PHmqHdddqBWMmTvMvTGMBWPdwhssnnHlhgsNwhwNHQzwrswh",
    "cSbVcDLtbfLSFzhlhJswgtrsww",
    "bSLlFLFFLDZVLpZVjFLdPMdBBqGGPmmqWGdGjM",
    "FQCnQwFRbnrSfgQgwFRCnswmPLpMppPdMMllpLMptMLldPSZ",
    "cJhhJcJVBJjhfHDvJqThvVDcpdGGqdZGdlltpqWdMqpdGWtG",
    "HhzTjJBzJTvNJHvzvvNBzBFnFCNCbCwrbnRbgRwfwQsg",
    "jRzDgbDDQDgVqqDGsjttNdwqNJZNwNdTWrpB",
    "MHvvvlSHFllMhhMrpWBJtlWdpJrTwZ",
    "mFcFFHmCmtcvfvFFHHLDGnRVzjDgnmgmnzGgGg",
    "JJhDpDdmsJJdgmhrpPjGjFLPPSNpjL",
    "WbznbRGnPfrfRSrN",
    "WqGnnVGVMGHtWTCgJvZHggBggZCg",
    "wlrPQtZQvwrzlvNfZLMZBjbbqjqLbSBjTg",
    "PGJDVdsdhsPVPjbTcLcGLgjqbM",
    "VPDRHWRdsRQvpfmmlw",
    "pvTZTSpTZvGGphNvvbDpdrMqrjlWdPqqjWdldNrd",
    "gmmJmsQfJgcRQJQJJncVQjMWllSnqljqBlPPjPHHHH",
    "QVJQRVcwmJcchwpSZLwGbSZZ",
    "zjrDMWcjDzQjDlWrnqqRBRNhBJRBhBJqnf",
    "TTGPPdgGLwdHGwGPTgLbbvhHtRRNRRSfchqRvSqHRJ",
    "TZTccPpdZwPQjllsspjVzD",
    "jHLHhHFRjhcblDRRWbWTdtppLTntTnMmGLMvTp",
    "BBQBgBBCrrgqJqTtMZMpngdtpvpG",
    "QJJJQrsVsQQfQVPCNqsNSjHdhhdRHDNHFHFclh",
    "RbCLnvdtnLRLRbmLPpHdQCvmNJpJSZSJlgDzglGlzcclcDGD",
    "qBBwMjfsFMjsMbfWbwjlzDZlcWclJczgNDGNDl",
    "wqjhrwwhhCvbQPrRnC",
    "vpWDDDWZQQNGllwHlwWVGj",
    "LCPdqdcdtsvdsCtsddvmVrVjjrBwHlmswmBnmw",
    "fLfvSgvMfdCPqzZNThfNNpTJJQ",
    "CVVVLbNVmGNQbGbGHHbHbvdwgQlwJDTFgJQdDZDJFD",
    "ssWBsBWrjSzWrPtBjnSCTwvFZlDjwZDdgwTDwggv",
    "nntPBqBrPsBfnCRCBWzCVcGVHMLNcbHLNmHqGphp",
    "sbbwwzdsbqQQbQnnNbPNGbznHHRdLTggMVHFVvRZTRVRHMZF",
    "mWffDWfflBpfmcWjWrrJVvgRLlMZVVhMFFTlHhMM",
    "rJJCctmjcfvzsqsqbtbqPP",
    "HGWjHWzVctQVcJVtjvRsvLTddqDDDsjRLg",
    "bbMnlNChZQLZhdDs",
    "SMMMMMMNmMllSlrmCczGcVzBcGWFBQGcrt",
    "VwQlqcLfdLGqdqDjjgZrjZBdttjd",
    "zSPPPJzJGjJjZrCBDt",
    "WMTMsTWsccsvGGwH",
    "hZvbQrjTTZjZcjWNrjnQrcTRpGMqcRfRRGzHfHfpfRMqRz",
    "mDJlFmwCVVwbCVbPBRLMMLpRLwRLHqpR",
    "gsCmgJsPDCtCVlvbhgQjhgQbnQbd",
    "fSgbhhGPGJGhRDmlhhHcHDBH",
    "LsMwQWFswsQMsQMvjslcBcDldBTWfDcHRRdl",
    "ZpVFwLQwVLQvCVsMjrJbbCNPbzSJtPbPPf",
    "VDzWMCpfCcCRDzqDzqNnvLZnfntHQnPPLQlt",
    "sJmdbTBdmmGhFhhbJNNQlJnQlQLHPZNn",
    "sdwmwsdrmMRpDRMLcw",
    "JpWmSWpCnCbJBZHZVldbdfZf",
    "rgdrgNdrjgNPrMjwTssrPdfDZqsVfQHDFlQDDHQVsZfB",
    "TRPdNNLgjNwrRTrJpppzCmzmCLSnvS",
    "QbtQJHQmbmfmBRvbQRzBvldqcFljsGcFdGdvsqqGls",
    "ChCPWhDhWZWJVnZpCNChhVDcMcDdcdgGscjgFjGFlsjjGq",
    "WZNTWNhNZfJJbTJTmR",
    "CHGCHFcZvCrchrZrhsVtsBQjMstfZMMBgg",
    "NNqwDLmDjJgQBmVQ",
    "wdWLLTgWRTWcCcbrHCHhGW",
    "bTZZvNjNjLgTCHcWhccfhWJdhvnc",
    "mnFFmPGSwRPShzVPPWPdhhzr",
    "FRtBFGBMFQFttRwtZgTjCTnQNbNLjTCH",
    "bJSqrSpDJbSNbFjSFCfPWGcwGWPrcTCfwr",
    "tRtLhDsvhQZlHRhRtQQnCnCcdwCPwTwdGcGP",
    "HsHvsmBZvmvsmBhHvLssVqDSNgFMDzgbbDVJzbpMVq",
    "nSSDHRRRQRBCLCQC",
    "qGmfPzGmGlrrrpfrqlzrJtLvBlhQbSCvbtCtlFhLFC",
    "zzpmqqJJVVfJfPfMpfdHNndsNwDSMSDDNcsc",
    "CscQsVMhCsMsMHhhVthtwmgZNRqzWLBRLRLmBWmZWBND",
    "JQJdddrjrLqBgDBq",
    "QbFlTffpMbMnsPCh",
    "gDdbVbVDddDfVfWQfBRLQZsZLRQQ",
    "FCCTrGCMStwGHTtTWLQhLZrlRssRhRhp",
    "FSHqtFTmFwmCsSwGTHtMTSdjjcdnVddgzmbVmjmndbbD",
    "JtBBMcLWLdfFLhMttcWWhfWLrTRGFsbwTmRGwmwbbCTGGsbD",
    "PzQpSQQQvzVvpzHqjvNvQSvGRmmTDVRDmsGsRGsrcDcDGC",
    "cQPHSPvPvZHqcZjzpZjnZNtWlLdtldJWfnfhlJJtLdMg",
    "nPPssTBnMJPdtHPVHtRhpv",
    "bSSgGFWDgWwDFFlmWlcShqdpRqpVcHvvnqpvpRHd",
    "bGFnGljgSsjBCTBszz"
]

const testInput = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
]

const scoreMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
    ['A', 1+26],
    ['B', 2+26],
    ['C', 3+26],
    ['D', 4+26],
    ['E', 5+26],
    ['F', 6+26],
    ['G', 7+26],
    ['H', 8+26],
    ['I', 9+26],
    ['J', 10+26],
    ['K', 11+26],
    ['L', 12+26],
    ['M', 13+26],
    ['N', 14+26],
    ['O', 15+26],
    ['P', 16+26],
    ['Q', 17+26],
    ['R', 18+26],
    ['S', 19+26],
    ['T', 20+26],
    ['U', 21+26],
    ['V', 22+26],
    ['W', 23+26],
    ['X', 24+26],
    ['Y', 25+26],
    ['Z', 26+26],
])

const test = input
    .map(
        row => {
            const result = [];
            const letters = row.split('')
            const letters_A = letters.slice(0, letters.length / 2)
            const letters_B = letters.slice(letters.length / 2, letters.length)
            const elements = new Set(letters_A)
            letters_B.forEach(letter => {
                elements.has(letter) ? result.push(letter) : elements.delete(letter)
            })
            return result
        }
    )
    .map(
        elements => Array.from(new Set([...elements]))
    )
    .flat(1)
    .map(letter => scoreMap.get(letter))
    .reduce((sum, current) => sum +  current, 0)

console.log(test);