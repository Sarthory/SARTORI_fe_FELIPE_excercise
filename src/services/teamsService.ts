import http from 'config/axiosConfig';
import {Team, TeamOverview, UserData} from 'types';

export const teamsService = {
    getAllTeams: async (): Promise<Team[]> => {
        try {
            const req = await http.get('teams');

            const {data, status} = req;

            switch (status) {
                case 200: {
                    return data;
                }

                default: {
                    return [];
                }
            }
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    getTeamById: async (id: string, name: string): Promise<TeamOverview> => {
        try {
            const req = await http.get(`teams/${id}`);

            const {data, status} = req;

            switch (status) {
                case 200: {
                    const {teamLeadId, teamMemberIds} = data;
                    const ids = [teamLeadId, ...teamMemberIds];
                    const teamMemberData = await teamsService.getUsersById(ids);

                    const res = {
                        id,
                        name,
                        teamLeadId,
                        teamMemberIds,
                        teamMemberData,
                    } as TeamOverview;

                    return res;
                }

                default: {
                    return null;
                }
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    getUsersById: async (userIds: string[]): Promise<UserData[]> => {
        try {
            const users = [];

            for (const [index, userId] of userIds.entries()) {
                const req = await http.get(`users/${userId}`);

                const {data, status} = req;

                switch (status) {
                    case 200: {
                        const user: UserData = data;

                        if (index === 0) {
                            user.teamLeader = true;
                        }

                        users.push(user);
                        break;
                    }

                    default: {
                        break;
                    }
                }
            }

            return users as UserData[];
        } catch (error) {
            console.error(error);
            return [];
        }
    },
};
