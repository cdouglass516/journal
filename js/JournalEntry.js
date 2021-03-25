/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <div class="pastJournalEntries">
        <hr>
        <section id="entry--${entry.id}" class="journalEntry">
            <p>${entry.date}-${entry.entry}</p>
            <img id="delete${entry.id}"src="../img/deletesm.png" alt="delete post" width="25" height="25">
            <img id="edit${entry.id}" src="../img/editsm.png" alt="delete post" width="25" height="25">
        </section>
        <hr>
    </div>
    `
}
