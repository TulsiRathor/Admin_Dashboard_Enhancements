       // ==================== SAMPLE DATA ====================

        // Module 2 Data - Unverified Users
        const unverifiedUsers = [
            { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", role: "client", skills: ["Project Management", "Product Design"], hourlyRate: "$45-65", availability: "Full-time", initials: "SJ", projects: 3, proposals: 8 },
            { id: 2, name: "Mike Chen", email: "mike.chen@email.com", role: "freelancer", skills: ["React", "Node.js", "Python"], hourlyRate: "$55", availability: "Part-time", initials: "MC", projects: 5, proposals: 12 },
            { id: 3, name: "Emily Rodriguez", email: "emily.r@email.com", role: "client", skills: ["Marketing", "Content Strategy"], hourlyRate: "$35-50", availability: "Project-based", initials: "ER", projects: 2, proposals: 3 },
            { id: 4, name: "Alex Thompson", email: "alex.t@email.com", role: "freelancer", skills: ["UI/UX Design", "Figma"], hourlyRate: "$50", availability: "Full-time", initials: "AT", projects: 8, proposals: 15 },
            { id: 5, name: "Priya Patel", email: "priya.p@email.com", role: "freelancer", skills: ["Content Writing", "SEO"], hourlyRate: "$40", availability: "Full-time", initials: "PP", projects: 4, proposals: 7 },
            { id: 6, name: "David Kim", email: "david.k@email.com", role: "client", skills: ["Business Strategy"], hourlyRate: "$60-80", availability: "Part-time", initials: "DK", projects: 1, proposals: 0 }
        ];

        // Module 2 Data - Client Demand
        const demandClients = [
            { id: 101, name: "TechStart Inc", projects: 5, proposals: 23, status: "high", budget: "$5,000-8,000", initials: "TI" },
            { id: 102, name: "Creative Agency", projects: 3, proposals: 15, status: "high", budget: "$3,500-6,000", initials: "CA" },
            { id: 103, name: "Local Business Co", projects: 1, proposals: 2, status: "low", budget: "$1,200", initials: "LB" },
            { id: 104, name: "Startup Venture", projects: 2, proposals: 4, status: "low", budget: "$2,500-4,000", initials: "SV" },
            { id: 105, name: "Enterprise Corp", projects: 8, proposals: 31, status: "high", budget: "$10,000-15,000", initials: "EC" },
            { id: 106, name: "New Business", projects: 1, proposals: 0, status: "low", budget: "$800-1,500", initials: "NB" }
        ];

        // Module 3 Data - Contracts
        const contractsData = [
            {
                id: "CT-001",
                project: "E-commerce Website Development",
                client: { id: 101, name: "TechStart Inc", email: "contact@techstart.com" },
                freelancer: { id: 201, name: "Sarah Chen", email: "sarah.c@freelance.com" },
                amount: 4500,
                status: "active",
                startDate: "2024-01-15",
                endDate: "2024-02-28",
                disputeReason: null,
                messages: [
                    { sender: "client", senderName: "TechStart Inc", content: "Can we add more features?", time: "2024-01-20 10:30" },
                    { sender: "freelancer", senderName: "Sarah Chen", content: "Sure, I can do that.", time: "2024-01-20 11:45" }
                ]
            },
            {
                id: "CT-002",
                project: "Mobile App Development",
                client: { id: 102, name: "Creative Agency", email: "projects@creative.com" },
                freelancer: { id: 202, name: "Mike Johnson", email: "mike.j@dev.com" },
                amount: 8200,
                status: "disputed",
                startDate: "2024-01-10",
                endDate: null,
                disputeReason: "Payment delay and quality issues",
                messages: [
                    { sender: "freelancer", senderName: "Mike Johnson", content: "I haven't received payment.", time: "2024-02-01 09:00" },
                    { sender: "client", senderName: "Creative Agency", content: "Work wasn't as per requirements.", time: "2024-02-01 10:30" }
                ]
            },
            {
                id: "CT-003",
                project: "Logo Design Package",
                client: { id: 103, name: "Local Business Co", email: "info@localbusiness.com" },
                freelancer: { id: 203, name: "Emma Davis", email: "emma.d@design.com" },
                amount: 650,
                status: "completed",
                startDate: "2024-01-05",
                endDate: "2024-01-20",
                disputeReason: null,
                messages: [
                    { sender: "client", senderName: "Local Business Co", content: "Love the design!", time: "2024-01-12 15:20" }
                ]
            },
            {
                id: "CT-004",
                project: "Content Writing (10 articles)",
                client: { id: 104, name: "Digital Solutions", email: "content@digitalsolutions.com" },
                freelancer: { id: 204, name: "Priya Patel", email: "priya.p@writer.com" },
                amount: 1200,
                status: "disputed",
                startDate: "2024-01-18",
                endDate: null,
                disputeReason: "Plagiarism concerns",
                messages: [
                    { sender: "client", senderName: "Digital Solutions", content: "Found copied content.", time: "2024-02-05 13:00" }
                ]
            },
            {
                id: "CT-005",
                project: "SEO Optimization",
                client: { id: 105, name: "Startup Venture", email: "hello@startup.com" },
                freelancer: { id: 205, name: "Alex Thompson", email: "alex.t@seo.com" },
                amount: 2800,
                status: "active",
                startDate: "2024-01-22",
                endDate: "2024-03-15",
                disputeReason: null,
                messages: []
            }
        ];

        // Module 3 Data - Reviews
        const reviewsData = [
            {
                id: 1,
                contractId: "CT-003",
                reviewer: { id: 103, name: "Local Business Co", role: "client", avatar: "LB" },
                reviewee: { id: 203, name: "Emma Davis", role: "freelancer", avatar: "ED" },
                rating: 5,
                comment: "Excellent work! Delivered ahead of schedule and exceeded expectations. Very professional communication throughout the project.",
                createdAt: "2024-01-25T10:30:00",
                flagged: false,
                flagReason: null
            },
            {
                id: 2,
                contractId: "CT-001",
                reviewer: { id: 201, name: "Sarah Chen", role: "freelancer", avatar: "SC" },
                reviewee: { id: 101, name: "TechStart Inc", role: "client", avatar: "TI" },
                rating: 5,
                comment: "Great client, very clear requirements. Paid on time!",
                createdAt: "2024-02-01T14:20:00",
                flagged: false,
                flagReason: null
            },
            {
                id: 3,
                contractId: "CT-002",
                reviewer: { id: 102, name: "Creative Agency", role: "client", avatar: "CA" },
                reviewee: { id: 202, name: "Mike Johnson", role: "freelancer", avatar: "MJ" },
                rating: 2,
                comment: "Disappointing work. Missed deadlines and poor communication. Would not recommend.",
                createdAt: "2024-02-05T09:15:00",
                flagged: true,
                flagReason: "Potential fake review - client has only one review"
            },
            {
                id: 4,
                contractId: "CT-005",
                reviewer: { id: 205, name: "Alex Thompson", role: "freelancer", avatar: "AT" },
                reviewee: { id: 105, name: "Startup Venture", role: "client", avatar: "SV" },
                rating: 4,
                comment: "Good client, responsive and clear about requirements.",
                createdAt: "2024-02-08T16:45:00",
                flagged: false,
                flagReason: null
            },
            {
                id: 5,
                contractId: "CT-004",
                reviewer: { id: 104, name: "Digital Solutions", role: "client", avatar: "DS" },
                reviewee: { id: 204, name: "Priya Patel", role: "freelancer", avatar: "PP" },
                rating: 1,
                comment: "Very bad experience. Had to redo all work. Check my profile for best services!!! www.spamlink.com",
                createdAt: "2024-02-09T11:00:00",
                flagged: true,
                flagReason: "Spam content and inappropriate language"
            }
        ];

        // ==================== STATE MANAGEMENT ====================
        let currentUnverifiedUsers = [...unverifiedUsers];
        let currentDemandClients = [...demandClients];
        let currentContracts = [...contractsData];
        let currentReviews = [...reviewsData];
        let currentUserFilter = 'all';

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            renderUnverifiedUsers();
            renderDemandClients();
            renderContracts();
            renderReviews();
            updateAllStats();
            updateBadges();
        });

        // ==================== STATS FUNCTIONS ====================
        function updateAllStats() {
            document.getElementById('totalUsers').textContent = 248;
            document.getElementById('pendingUsers').textContent = currentUnverifiedUsers.length;
            document.getElementById('totalContracts').textContent = currentContracts.length;
            document.getElementById('flaggedReviewsCount').textContent = currentReviews.filter(r => r.flagged).length;
        }

        function updateBadges() {
            document.getElementById('pendingVerificationBadge').textContent = currentUnverifiedUsers.length;
            document.getElementById('disputeBadge').textContent = currentContracts.filter(c => c.status === 'disputed').length;
            document.getElementById('flaggedBadge').textContent = currentReviews.filter(r => r.flagged).length;
        }

        // ==================== MODULE 2 FUNCTIONS ====================
        function renderUnverifiedUsers() {
            const tbody = document.getElementById('unverifiedTableBody');
            tbody.innerHTML = '';
            
            let filtered = currentUnverifiedUsers;
            if(currentUserFilter !== 'all') {
                filtered = currentUnverifiedUsers.filter(u => u.role === currentUserFilter);
            }
            
            filtered.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="user-info" onclick="viewUserProfile(${user.id})">
                            <div class="user-avatar">${user.initials}</div>
                            <div class="user-details">
                                <div class="user-name">${user.name}</div>
                                <div class="user-email">${user.email}</div>
                            </div>
                        </div>
                    </td>
                    <td><span class="badge-role ${user.role === 'client' ? 'badge-client' : 'badge-freelancer'}">${user.role}</span></td>
                    <td><div class="skills">${user.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div></td>
                    <td>${user.hourlyRate}</td>
                    <td>${user.availability}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-icon btn-success" onclick="approveUser(${user.id})"><i class="fas fa-check"></i> Approve</button>
                            <button class="btn-icon btn-danger" onclick="rejectUser(${user.id})"><i class="fas fa-times"></i> Reject</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function renderDemandClients() {
            const tbody = document.getElementById('demandTableBody');
            tbody.innerHTML = '';
            
            currentDemandClients.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div class="user-info" onclick="viewClientProfile(${client.id})">
                            <div class="user-avatar">${client.initials}</div>
                            <div class="user-details">
                                <div class="user-name">${client.name}</div>
                            </div>
                        </div>
                    </td>
                    <td><strong>${client.projects}</strong> projects</td>
                    <td><strong>${client.proposals}</strong> proposals</td>
                    <td><span class="badge-role ${client.status === 'high' ? 'badge-client' : 'badge-low'}">${client.status === 'high' ? '🔥 High Demand' : '📉 Low Demand'}</span></td>
                    <td>${client.budget}</td>
                    <td><button class="btn-icon btn-primary" onclick="viewClientProfile(${client.id})"><i class="fas fa-eye"></i> View</button></td>
                `;
                tbody.appendChild(row);
            });
        }

        function filterUserRole(role) {
            currentUserFilter = role;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderUnverifiedUsers();
        }

        function searchUsers() {
            const searchTerm = document.getElementById('userSearch').value.toLowerCase();
            if(!searchTerm) {
                currentUnverifiedUsers = [...unverifiedUsers];
            } else {
                currentUnverifiedUsers = unverifiedUsers.filter(user => 
                    user.name.toLowerCase().includes(searchTerm) ||
                    user.email.toLowerCase().includes(searchTerm) ||
                    user.skills.some(s => s.toLowerCase().includes(searchTerm))
                );
            }
            renderUnverifiedUsers();
        }

        function approveUser(id) {
            if(confirm('Approve this user for verification?')) {
                currentUnverifiedUsers = currentUnverifiedUsers.filter(u => u.id !== id);
                renderUnverifiedUsers();
                updateBadges();
                alert('User approved successfully!');
            }
        }

        function rejectUser(id) {
            if(confirm('Reject this user verification?')) {
                currentUnverifiedUsers = currentUnverifiedUsers.filter(u => u.id !== id);
                renderUnverifiedUsers();
                updateBadges();
                alert('User rejected!');
            }
        }

        function viewUserProfile(id) {
            const user = unverifiedUsers.find(u => u.id === id);
            if(!user) return;
            
            document.getElementById('profileModalBody').innerHTML = `
                <div class="profile-detail-item">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value"><strong>${user.name}</strong></span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${user.email}</span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Role:</span>
                    <span class="detail-value"><span class="badge-role ${user.role === 'client' ? 'badge-client' : 'badge-freelancer'}">${user.role}</span></span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Skills:</span>
                    <span class="detail-value"><div class="skills">${user.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div></span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Rate:</span>
                    <span class="detail-value">${user.hourlyRate}/hour</span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Availability:</span>
                    <span class="detail-value">${user.availability}</span>
                </div>
                <div class="stats-mini">
                    <div class="stat-mini-item">
                        <div class="stat-mini-value">${user.projects || 0}</div>
                        <div class="stat-mini-label">Projects</div>
                    </div>
                    <div class="stat-mini-item">
                        <div class="stat-mini-value">${user.proposals || 0}</div>
                        <div class="stat-mini-label">Proposals</div>
                    </div>
                </div>
            `;
            document.getElementById('profileModal').classList.add('active');
        }

        function viewClientProfile(id) {
            const client = demandClients.find(c => c.id === id);
            if(!client) return;
            
            document.getElementById('profileModalBody').innerHTML = `
                <div class="profile-detail-item">
                    <span class="detail-label">Company:</span>
                    <span class="detail-value"><strong>${client.name}</strong></span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Projects:</span>
                    <span class="detail-value">${client.projects} posted</span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Proposals:</span>
                    <span class="detail-value">${client.proposals} received</span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Avg Budget:</span>
                    <span class="detail-value">${client.budget}</span>
                </div>
                <div class="profile-detail-item">
                    <span class="detail-label">Demand:</span>
                    <span class="detail-value"><span class="badge-role ${client.status === 'high' ? 'badge-client' : 'badge-low'}">${client.status === 'high' ? 'High Demand' : 'Low Demand'}</span></span>
                </div>
            `;
            document.getElementById('profileModal').classList.add('active');
        }

        // ==================== MODULE 3 FUNCTIONS ====================
        function renderContracts() {
            const tbody = document.getElementById('contractsTableBody');
            if(!tbody) return;
            
            tbody.innerHTML = '';
            
            currentContracts.forEach(contract => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${contract.id}</strong></td>
                    <td>${contract.project}</td>
                    <td>${contract.client.name}</td>
                    <td>${contract.freelancer.name}</td>
                    <td>$${contract.amount.toLocaleString()}</td>
                    <td><span class="status-badge status-${contract.status}">${contract.status}</span></td>
                    <td>${new Date(contract.startDate).toLocaleDateString()}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-icon btn-primary" onclick="viewContractMessages('${contract.id}')" title="View Messages"><i class="fas fa-comment"></i></button>
                            ${contract.status === 'disputed' ? 
                                `<button class="btn-icon btn-warning" onclick="openDisputeResolution('${contract.id}')" title="Resolve Dispute"><i class="fas fa-gavel"></i></button>` : 
                                ''
                            }
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function renderReviews() {
            const reviewsGrid = document.getElementById('reviewsGrid');
            const flaggedGrid = document.getElementById('flaggedGrid');
            
            if(!reviewsGrid || !flaggedGrid) return;
            
            reviewsGrid.innerHTML = '';
            flaggedGrid.innerHTML = '';
            
            currentReviews.forEach(review => {
                const reviewCard = createReviewCard(review);
                if(review.flagged) {
                    flaggedGrid.innerHTML += reviewCard;
                } else {
                    reviewsGrid.innerHTML += reviewCard;
                }
            });
        }

        function createReviewCard(review) {
            return `
                <div class="review-card ${review.flagged ? 'flagged' : ''}">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">${review.reviewer.avatar}</div>
                            <div>
                                <div style="font-weight: 600;">${review.reviewer.name}</div>
                                <div style="font-size: 12px; color: #6b7280;">${review.reviewer.role}</div>
                            </div>
                        </div>
                        <span class="status-badge" style="background: #f3f4f6;">#${review.contractId}</span>
                    </div>
                    <div class="rating">
                        ${Array(5).fill(0).map((_, i) => 
                            `<i class="fas fa-star" style="color: ${i < review.rating ? '#fbbf24' : '#d1d5db'}"></i>`
                        ).join('')}
                    </div>
                    <div class="review-text">"${review.comment}"</div>
                    <div class="review-meta">
                        <span><i class="far fa-clock"></i> ${timeAgo(review.createdAt)}</span>
                        <button class="flag-button ${review.flagged ? 'flagged' : ''}" onclick="toggleFlagReview(${review.id})">
                            <i class="fas fa-flag"></i> ${review.flagged ? 'Flagged' : 'Flag'}
                        </button>
                    </div>
                    ${review.flagReason ? `
                        <div style="margin-top: 12px; padding: 8px; background: #fee2e2; border-radius: 8px; font-size: 12px;">
                            <strong>Reason:</strong> ${review.flagReason}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        function viewContractMessages(contractId) {
            const contract = currentContracts.find(c => c.id === contractId);
            if(!contract) return;
            
            const messageThread = document.getElementById('messageThread');
            messageThread.innerHTML = '<div class="message-thread">' + 
                (contract.messages.length ? contract.messages.map(msg => `
                    <div class="message ${msg.sender}">
                        <div class="message-header">
                            <strong>${msg.senderName}</strong>
                            <span>${msg.sender === 'client' ? 'Client' : 'Freelancer'}</span>
                        </div>
                        <div class="message-content">${msg.content}</div>
                        <div class="message-time">${msg.time}</div>
                    </div>
                `).join('') : '<p style="text-align: center; color: #6b7280;">No messages yet</p>') + 
            '</div>';
            
            document.getElementById('messageModal').classList.add('active');
        }

        function openDisputeResolution(contractId) {
            const contract = currentContracts.find(c => c.id === contractId);
            if(!contract) return;
            
            document.getElementById('disputeModalBody').innerHTML = `
                <div class="dispute-card">
                    <div class="dispute-header">
                        <span class="dispute-title">Contract #${contract.id}</span>
                        <span class="dispute-badge">URGENT</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                        <div><strong>Client:</strong> ${contract.client.name}</div>
                        <div><strong>Freelancer:</strong> ${contract.freelancer.name}</div>
                        <div><strong>Value:</strong> $${contract.amount}</div>
                        <div><strong>Started:</strong> ${new Date(contract.startDate).toLocaleDateString()}</div>
                    </div>
                    
                    <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
                        <strong>Dispute Reason:</strong>
                        <p style="margin-top: 8px;">${contract.disputeReason || 'Not specified'}</p>
                    </div>
                    
                    <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
                        <strong>Messages:</strong> ${contract.messages.length} exchanged
                        <button class="btn-icon btn-primary" style="margin-left: 12px;" onclick="viewContractMessages('${contract.id}')">View Messages</button>
                    </div>
                    
                    <div class="action-buttons" style="margin-top: 20px;">
                        <button class="btn-icon btn-primary" style="flex: 1;" onclick="escalateToMediation('${contract.id}')">
                            <i class="fas fa-phone"></i> Schedule Mediation
                        </button>
                        <button class="btn-icon btn-success" style="flex: 1;" onclick="markDisputeResolved('${contract.id}')">
                            <i class="fas fa-check"></i> Mark Resolved
                        </button>
                        <button class="btn-icon btn-danger" style="flex: 1;" onclick="refundToClient('${contract.id}')">
                            <i class="fas fa-undo"></i> Process Refund
                        </button>
                    </div>
                </div>
            `;
            document.getElementById('disputeModal').classList.add('active');
        }

        function toggleFlagReview(reviewId) {
            const review = currentReviews.find(r => r.id === reviewId);
            if(review) {
                review.flagged = !review.flagged;
                if(review.flagged) {
                    review.flagReason = prompt('Reason for flagging this review:', 'Inappropriate content');
                } else {
                    review.flagReason = null;
                }
                renderReviews();
                updateBadges();
            }
        }

        function escalateToMediation(contractId) {
            alert(`Mediation scheduled for contract ${contractId}. Both parties will receive email.`);
            closeModal('disputeModal');
        }

        function markDisputeResolved(contractId) {
            if(confirm('Mark this dispute as resolved?')) {
                const contract = currentContracts.find(c => c.id === contractId);
                contract.status = 'active';
                contract.disputeReason = null;
                renderContracts();
                updateBadges();
                alert('Dispute marked as resolved!');
                closeModal('disputeModal');
            }
        }

        function refundToClient(contractId) {
            if(confirm('Process full refund to client? This action cannot be undone.')) {
                alert(`Refund processed for contract ${contractId}`);
                closeModal('disputeModal');
            }
        }

        function applyFilters() {
            // Implement filter logic here
            renderContracts();
        }

        function searchContracts() {
            // Implement search logic here
            renderContracts();
        }

        // ==================== UTILITY FUNCTIONS ====================
        function timeAgo(dateString) {
            const date = new Date(dateString);
            const now = new Date();
            const seconds = Math.floor((now - date) / 1000);
            if(seconds < 60) return 'just now';
            if(seconds < 3600) return Math.floor(seconds/60) + ' minutes ago';
            if(seconds < 86400) return Math.floor(seconds/3600) + ' hours ago';
            return Math.floor(seconds/86400) + ' days ago';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // ==================== TAB SWITCHING ====================
        function switchMainModule(module) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            event.target.closest('.nav-item').classList.add('active');
            
            const titles = {
                'dashboard': 'Dashboard Overview',
                'verification': 'User Verification',
                'contracts': 'Contract Oversight',
                'reviews': 'Review Monitoring',
                'disputes': 'Dispute Resolution',
                'analytics': 'Platform Analytics'
            };
            document.getElementById('pageTitle').textContent = titles[module];
            
            if(module === 'verification' || module === 'dashboard') {
                document.getElementById('module2Content').style.display = 'block';
                document.getElementById('module3Content').style.display = 'none';
                switchSection('verification');
            } else {
                document.getElementById('module2Content').style.display = 'none';
                document.getElementById('module3Content').style.display = 'block';
                switchContractTab('contracts');
            }
        }

        function switchModule(tabName) {
            document.querySelectorAll('.module-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            if(tabName === 'overview' || tabName === 'verification') {
                document.getElementById('module2Content').style.display = 'block';
                document.getElementById('module3Content').style.display = 'none';
                if(tabName === 'verification') switchSection('verification');
            } else {
                document.getElementById('module2Content').style.display = 'none';
                document.getElementById('module3Content').style.display = 'block';
                if(tabName === 'contracts') switchContractTab('contracts');
                if(tabName === 'reviews') switchContractTab('reviews');
            }
        }

        function switchSection(section) {
            document.querySelectorAll('#module2Content .section-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            document.getElementById('verificationSection').style.display = section === 'verification' ? 'block' : 'none';
            document.getElementById('demandSection').style.display = section === 'demand' ? 'block' : 'none';
        }

        function switchContractTab(tab) {
            document.querySelectorAll('#module3Content .section-tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            document.getElementById('contractsListSection').style.display = tab === 'contracts' ? 'block' : 'none';
            document.getElementById('disputesListSection').style.display = tab === 'disputes' ? 'block' : 'none';
            document.getElementById('reviewsListSection').style.display = tab === 'reviews' ? 'block' : 'none';
            document.getElementById('flaggedListSection').style.display = tab === 'flagged' ? 'block' : 'none';
        }

        function showFlaggedReviews() {
            switchMainModule('reviews');
            switchContractTab('flagged');
        }

        function filterByType(type) {
            alert(`Filtering by ${type}`);
        }

        function filterByStatus(status) {
            if(status === 'pending') {
                switchMainModule('verification');
            } else if(status === 'active') {
                switchMainModule('contracts');
                switchContractTab('contracts');
            }
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if(event.target.classList.contains('modal')) {
                event.target.classList.remove('active');
            }
        }