import React from 'react'

const PermissionObj = () => {
    const permissions = {
        Standards: {
            self: 1
        },
        MainMenu: {
            Standards: {
                self: 1
            },
            self: 1,
            UnitConfiguration: {
                self: 4
            },
            BulkMappingConfig: {
                self: 4
            },
            MappingLibrary: {
                self: 1
            },
            Project: {
                Study: {
                    PreviousWorkFlowAction: {
                        self: 2
                    },
                    self: 2,
                    GenerateXML: {
                        self: 2
                    },
                    ExportAsExcel: {
                        self: 2
                    },
                    Comment: {
                        self: 2
                    },
                    StudyWorkSpace: {
                        Program: {
                            self: 4
                        },
                        Mapping: {
                            self: 3
                        },
                        Annotation: {
                            self: 3
                        },
                        self: 1,
                        Define: {
                            self: 3
                        }
                    },
                    Workflow: {
                        self: 2
                    },
                    StudyLock: {
                        self: 2
                    },
                    Import: {
                        self: 2
                    },
                    UserAssignment: {
                        self: 1
                    },
                    Version: {
                        self: 2
                    },
                    AuditLog: {
                        self: 2
                    }
                },
                self: 1
            }
        },
        ManagerDashboard: {
            self: 4
        },
        UnitConfiguration: {
            self: 4
        },
        MappingLibrary: {
            self: 1
        },
        BulkMappingConfig: {
            self: 4
        },
        MyProfile: {
            self: 4
        },
        UserMenu: {
            self: 4,
            SecurityQuestion: {
                self: 4
            },
            AssignmentDetails: {
                self: 4
            },
            MyProfile: {
                self: 4
            },
            ChangePassword: {
                self: 4
            },
            RoleSelection: {
                self: 4
            }
        },
        ChangePassword: {
            self: 3
        },
        Header: {
            self: 3
        },
        Project: {
            Study: {
                PreviousWorkFlowAction: {
                    self: 2
                },
                self: 2,
                GenerateXML: {
                    self: 2
                },
                ExportAsExcel: {
                    self: 2
                },
                Comment: {
                    self: 2
                },
                StudyWorkSpace: {
                    Program: {
                        self: 4
                    },
                    Mapping: {
                        self: 3
                    },
                    Annotation: {
                        self: 3
                    },
                    self: 1,
                    Define: {
                        self: 3
                    }
                },
                Workflow: {
                    self: 2
                },
                StudyLock: {
                    self: 2
                },
                Import: {
                    self: 2
                },
                UserAssignment: {
                    self: 1
                },
                Version: {
                    self: 2
                },
                AuditLog: {
                    self: 2
                }
            },
            self: 1
        }
    }

    function checkPermission(permissions, keys) {
        var returnObj = 0;
        var permissionObject = permissions;
        if (permissionObject) {
            if (keys[0] === "self") {
                if (typeof permissionObject !== "undefined" && permissionObject["self"] !== null && permissionObject["self"] !== 0) {
                    return permissionObject["self"];
                } else {
                    return returnObj;
                }
            }
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (typeof permissionObject[key] !== "undefined" && permissionObject[key] !== null) {
                    permissionObject = permissionObject[key];
                } else {
                    return returnObj;
                }
            }
            if (typeof permissionObject["self"] !== "undefined" && permissionObject["self"] !== null && permissionObject["self"] !== 0) {
                return permissionObject["self"];
            } else {
                return returnObj;
            }
        }
        else {
            return returnObj;
        }
    }
    let x = checkPermission(permissions, ['ConfigMenu'])
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    return (
        <div>PermissionObj</div>
    )
}

export default PermissionObj