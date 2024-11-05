<!--@component
Provides a list of svg icons that can be referenced through the `Icon` component
-->
<div style="display: none">
	<!-- wrapper div allows use of innerHTML -->
	<svg>
		<symbol id="arrow-left" class="icon" viewBox="0 0 24 24">
			<line x1="19" y1="12" x2="5" y2="12" />
			<polyline points="12 19 5 12 12 5" />
		</symbol>

		<symbol id="arrow-right" class="icon" viewBox="0 0 24 24">
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</symbol>

		<symbol id="arrow-up" class="icon" viewBox="0 0 24 24">
			<line x1="12" y1="19" x2="12" y2="5" />
			<polyline points="5 12 12 5 19 12" />
		</symbol>

		<symbol id="arrow-down" class="icon" viewBox="0 0 24 24">
			<line x1="12" y1="5" x2="12" y2="19" />
			<polyline points="19 12 12 19 5 12" />
		</symbol>

		<symbol id="check" class="icon" viewBox="0 0 24 24">
			<polyline points="20 6 9 17 4 12" />
		</symbol>

		<symbol id="close" class="icon" viewBox="0 0 24 24">
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</symbol>

		<symbol id="download" class="icon" viewBox="0 0 24 24">
			<path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" y1="15" x2="12" y2="3" />
		</symbol>

		<symbol id="edit" class="icon" viewBox="0 0 24 24">
			<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
			<polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
		</symbol>

		<symbol id="menu" viewBox="0 0 48 48">
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="4"
				d="M7.95 11.95h32m-32 12h32m-32 12h32"
			/>
		</symbol>

		<symbol id="minus" class="icon" viewBox="0 0 24 24">
			<line x1="5" y1="12" x2="19" y2="12" />
		</symbol>

		<symbol id="plus" class="icon" viewBox="0 0 24 24">
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
		</symbol>

		<symbol id="save" class="icon" viewBox="0 0 24 24">
			<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
			<polyline points="17 21 17 13 7 13 7 21" />
			<polyline points="7 3 7 8 15 8" />
		</symbol>

		<symbol id="link" class="icon" viewBox="0 0 24 24">
			<path d="M9,7L6,7A2 2 0 0 0 6,17L9,17" />
			<path d="M15,7L18,7A2 2 0 0 1 18,17L15,17" />
			<path d="M7,12L17,12" />
		</symbol>

		<symbol id="chevron" class="icon" viewBox="0 0 24 24">
			<path d="M2,7 L12,17 L20,7" />
		</symbol>

		<symbol id="chevron-up" class="icon" viewBox="0 0 24 24">
			<polyline points="18 15 12 9 6 15" />
		</symbol>

		<symbol id="chevron-down" class="icon" viewBox="0 0 24 24">
			<polyline points="6 9 12 15 18 9" />
		</symbol>

		<symbol id="search" viewBox="0 0 32 32">
			<circle cx="11" cy="11" r="8" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
		</symbol>

		<symbol id="user" viewBox="0 0 32 32">
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</symbol>

		<symbol id="home" viewBox="-4 0 32 32">
			<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</symbol>

		<symbol id="file-text" viewBox="-2 0 32 32">
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="16" y1="13" x2="8" y2="13" />
			<line x1="16" y1="17" x2="8" y2="17" />
			<polyline points="10 9 9 9 8 9" />
		</symbol>

		<symbol id="users" viewBox="-3 0 32 32">
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</symbol>

		<symbol id="list" viewBox="-3 0 32 32">
			<line x1="8" y1="6" x2="21" y2="6" />
			<line x1="8" y1="12" x2="21" y2="12" />
			<line x1="8" y1="18" x2="21" y2="18" />
			<line x1="3" y1="6" x2="3.01" y2="6" />
			<line x1="3" y1="12" x2="3.01" y2="12" />
			<line x1="3" y1="18" x2="3.01" y2="18" />
		</symbol>
	</svg>
</div>
