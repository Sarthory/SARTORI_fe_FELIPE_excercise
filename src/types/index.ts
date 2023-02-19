export interface Team {
    id: string;
    name: string;
}

export interface TeamOverview {
    id: string;
    name?: string;
    teamLeadId: string;
    teamMemberIds: string[];
    teamMemberData?: UserData[];
}

export interface UserData {
    id: string;
    firstName: string;
    lastName: string;
    displayName: string;
    location: string;
    avatar: string;
    teamLeader?: boolean;
}

export interface ListItemColumn {
    key: string;
    value: string;
}

export interface ListItem {
    id: string;
    url?: string;
    columns: Array<ListItemColumn>;
    navigationProps?: UserData | Team;
}
